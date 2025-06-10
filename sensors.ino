#include <WiFi.h> 
#include <HTTPClient.h> 
#include <ArduinoJson.h>

// WiFi credentials
const char* ssid = ""; 
const char* password = "";

// Supabase configuration 
const char* supabaseUrl = ""; 
const char* supabaseKey = "";

// Sensor pin configuration 
const int tempSensorPin = 33; 
const int humiditySensorPin = 32; 
const int ammoniaSensorPin = 35; 
const int co2SensorPin = 34;

// Time between readings (milliseconds)
const long interval = 2000; // 1 minute
unsigned long previousMillis = 0;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected to WiFi");
}

void loop() {
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;

    // Read sensor values (replace with actual sensor reading code)
    float temperature = readTemperature();
    float humidity = readHumidity();
    float ammonia = analogRead(ammoniaSensorPin);
    float carbonDioxide = analogRead(co2SensorPin);

    // Send data to Supabase
    sendToSupabase(temperature, humidity, ammonia, carbonDioxide);
  }
}

// Placeholder sensor reading functions (replace with real sensor code)
float readTemperature() {
  return random(25, 35); // simulated 25-35°C
}

float readHumidity() {
  return random(50, 80); // simulated 50-80%
}

float readAmmonia() {
  return random(5, 20); // simulated 5-20 ppm
}

float readCO2() {
  return random(400, 1000); // simulated 400-1000 ppm
}

void sendToSupabase(float temp, float humidity, float ammonia, float co2) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    http.begin(supabaseUrl);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("apikey", supabaseKey);
    http.addHeader("Authorization", "Bearer " + String(supabaseKey));
    http.addHeader("Prefer", "return=representation"); // So you get response data/errors

    // Prepare JSON body
    DynamicJsonDocument doc(256);
    doc["temperature"] = temp;
    doc["humidity"] = humidity;
    doc["ammonia"] = ammonia;
    doc["carbon_dioxide"] = co2;

    String requestBody;
    serializeJson(doc, requestBody);

    int httpResponseCode = http.POST(requestBody);

    Serial.printf("HTTP Response code: %d\n", httpResponseCode);
    String response = http.getString();
    Serial.println("Response body:");
    Serial.println(response);

    http.end();
  } else {
    Serial.println("WiFi not connected");
  }
}
