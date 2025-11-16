# 🐔 PURAIR — AI + IoT Based Smart Egg Production Forecasting System  
### *An Intelligent, Sensor-Driven Poultry Farm Monitoring & Prediction Platform*

---

### 🐓 **Real Client Collaboration**  
PURAIR is being developed with inputs and real-world requirements from an  
**actual poultry farm client**, ensuring:

- Practicality  
- Deployability  
- Domain relevance  
- Real operational impact  

This makes PURAIR not just a lab prototype — but a **pre-production industry-ready solution**.

---

## 🏆 Achievements & Recognition

### 🥇 **Top 10 National Finalist — CMTI Design & Innovation Clinic 2025**  
PURAIR was selected as one of the **Top 10 Innovations across India** at the  
**CMTI National Design & Innovation Program 2025**, competing among nationwide submissions.

### 🔬 **6 Months of Dedicated Research**  
The system is backed by **6+ months of research** in:

- Environmental monitoring
- Poultry farm analytics
- LSTM-based forecasting
- IoT hardware optimization
- Data interpretation with domain experts

---

## 📌 Overview

**PURAIR** is an **AI + IoT powered egg production forecasting system** built for poultry farms.  
The platform uses **real-time environmental sensor data** and **biological management data** to forecast daily egg production accurately.

This enables:

- Early detection of production drops  
- Optimized feed planning  
- Improved flock health  
- Better decision-making  
- Reduced financial loss  

Designed specifically for **Indian poultry environments**, PURAIR blends **low-cost IoT hardware** with **advanced AI forecasting models**.

---

## 🚀 Key Features

### 🟦 IoT Layer  
Real-time sensing using ESP32-based hardware:

- **Air Quality (MQ135)**
- **Temperature**
- **Humidity**
- Optional: Alcohol / CO₂ Sensors

Data streams into the cloud for AI inference.

---

### 🟩 AI Layer  
A stacked **LSTM neural network** trained on:

#### Environmental Inputs
- AirQuality_MQ135  
- Temperature  
- Humidity  

#### Biological & Management Inputs
(Currently dummy data, real integration in progress)

- Age_Weeks  
- Feed_Intake_g  
- Breed_ID / Breed_Name  
- Body_Weight_g  
- Mortality  

#### Output
- **Next-day Egg Count**

---

Why LSTM?

- Captures time-dependent behavior  
- Learns patterns over rolling windows  
- Deals well with noisy biological data  
- Outperforms classical ML on sequential sensor streams  

---

## 📊 Data Pipeline

1. Load dataset  
2. Timestamp processing  
3. Standardize features  
4. Create 30-day sliding windows  
5. Train-test split  
6. Train stacked LSTM with callbacks  
7. Predict future egg count  
8. Inverse-scaling  
9. Evaluate performance  
10. Save artifacts for deployment  

---

## 📏 Evaluation Metrics

- **MAE** (Mean Absolute Error)  
- **RMSE** (Root Mean Square Error)  
- **R² Score**

These provide a strong understanding of trend-capturing ability and prediction accuracy.

---

## 🧪 Biological Dummy Data (Real Integration Coming Soon)

To prepare the model for multi-feature forecasting, biologically accurate dummy data is added:

### Age  
Starts at ~20 weeks and increases naturally.

### Feed Intake  
Typical 105–125 g/bird/day.

### Breed  
Encoded values:
- White Leghorn (0)  
- Hy-Line Brown (1)  
- ISA Brown (2)

### Body Weight  
1400–1850 g based on age.

### Mortality  
0–2 birds/day.


---

## 📡 Real-world Monitoring Strategy (Post-Deployment)

### Age  
Auto-increment; no hardware needed.

### Feed Intake  
- Manual entry OR  
- Future: IoT load-cell system

### Breed  
Static when flock is added.

### Body Weight  
- Manual sampling OR  
- Future: IoT smart perch

### Mortality  
Daily log (one-click entry)

---

## 🛠 Tech Stack

| Layer | Tools |
|-------|-------|
| Hardware | ESP32, MQ135, DHT11, Load Cell (HX711) |
| AI / Backend | Python, TensorFlow, Keras |
| ML Utilities | NumPy, Pandas, Scikit-learn |
| Visuals | Matplotlib |
| Models | `.h5` LSTM model, `.pkl` scalers |
| Data | purairDataset2.csv + augmented features |

---

---

## 🌱 Why PURAIR Matters

India’s poultry sector faces challenges like:

- Unexpected egg drop  
- Weather-driven stress  
- Feed mismanagement  
- Disease outbreaks  

PURAIR delivers:

- Intelligent forecasting  
- Continuous IoT monitoring  
- AI-driven insights  
- Precision farming at low cost  

A direct step toward **smart poultry farming**.

---

## 🧭 Future Scope

- Transformer-based time-series model  
- Full Firebase/Cloud Function deployment  
- Mobile dashboard for farmers  
- Automated feed optimization  
- Predictive disease detection  
- Smart perches and IoT load-cell feed silos  
- Multi-barn scaling support  

---

## 👥 Team ZERO

- **Hrudhay H** — AI & ML + Data Analysis  
- **Aditya Manhas** — Full-Stack + Pipelining
- **Abhishek A R** — Hardware + IoT
- **R Sujay Bharadwaj** — UI/UX Designing + IoT

PURAIR proudly stands as a  
**NAIN-funded innovation**,  
**Top 10 CMTI finalist**,  
and a solution being built with a **real poultry client**.

---

## 📝 License

This project is open-source under the MIT License.
