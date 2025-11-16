#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11
#define MQ135_PIN 34

const char* WIFI_SSID     = "Tech_Habba";
const char* WIFI_PASSWORD = "987654321";

const char* SUPABASE_URL  = "https://ipfqxgzylmfyffeqpdrb.supabase.co/rest/v1/sensor_data";
const char* SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwZnF4Z3p5bG1meWZmZXFwZHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NjgyOTUsImV4cCI6MjA3NzM0NDI5NX0.JFIvOF_hF3IKCO8br3dGoZhP7ks6HLwyGS0ryH8YBMA";

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  delay(500);

  Serial.println("Connecting to WiFi...");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }

  Serial.println("\nWiFi Connected");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());

  dht.begin();
}

void sendToSupabase(float mq, float temp, float hum) {
  if (WiFi.status() != WL_CONNECTED) return;

  HTTPClient http;
  http.begin(SUPABASE_URL);

  http.addHeader("apikey", SUPABASE_API_KEY);
  http.addHeader("Authorization", String("Bearer ") + SUPABASE_API_KEY);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Prefer", "return=minimal");

  String jsonData = "{"
                      "\"air_quality\": " + String(mq, 2) + ","
                      "\"temperature\": " + String(temp, 2) + ","
                      "\"humidity\": " + String(hum, 2) +
                    "}";

  int httpResponseCode = http.POST(jsonData);

  Serial.print("Supabase Response Code: ");
  Serial.println(httpResponseCode);

  http.end();
}

void loop() {
  int mqRaw = analogRead(MQ135_PIN);
  float mqValue = (float)mqRaw;   // convert int → float8-safe
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  Serial.println("Reading sensors...");
  Serial.print("MQ135: "); Serial.println(mqValue);
  Serial.print("Temp: ");  Serial.println(t);
  Serial.print("Hum: ");   Serial.println(h);

  sendToSupabase(mqValue, t, h);

  Serial.println("Upload done.\n");

  delay(2000);
}
