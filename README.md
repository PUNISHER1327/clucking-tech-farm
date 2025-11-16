# 🐔 PURAIR — AI + IoT Based Smart Egg Production Forecasting System  
### *An Intelligent, Sensor-Driven Poultry Farm Monitoring & Prediction Platform*

---

## 📌 Overview

**PURAIR** is an **AI + IoT powered egg production forecasting system** designed for poultry farms.  
The platform uses **real-time environmental sensor data** combined with **biological and management features** to forecast daily egg production with improved accuracy.

This helps farmers:

- Detect production drops early  
- Optimize feeding schedules  
- Improve flock health  
- Make data-driven decisions  
- Reduce financial losses  

Built for **Indian poultry conditions**, PURAIR focuses on affordability, scalability, and ease of deployment.

---

## 🚀 Key Features

### 🟦 IoT Layer  
Real-time sensing using ESP32-based hardware:

- **Air Quality (MQ135)**
- **Temperature**
- **Humidity**
- Optional: Alcohol / CO₂ Sensors  

Sensor data streams continuously to the cloud for AI inference.

---

### 🟩 AI Layer  
Forecasting done using a **Future-Ready LSTM Neural Network** trained on:

#### 📡 Environmental Sensor Inputs
- AirQuality_MQ135  
- Temperature  
- Humidity  

#### 🐓 Biological & Management Inputs *(Dummy data for now, real collection planned)*  
- Age_Weeks  
- Feed_Intake_g  
- Breed_ID / Breed_Name  
- Body_Weight_g  
- Mortality  

#### 🎯 Target Variable  
- **Daily Egg Count**

---


### Why LSTM?
- Egg production is **time-dependent**
- LSTM learns patterns over sliding windows (30-day sequences)
- Handles fluctuations, trends, and environmental transitions better than traditional ML

---

## 📊 Data Pipeline

1. Load raw dataset  
2. Convert timestamps  
3. Scale features (StandardScaler)  
4. Generate 30-day rolling sequences  
5. Train-test split (80/20)  
6. Train stacked LSTM model with callbacks  
7. Predict egg count  
8. Inverse scale predictions  
9. Evaluate using MAE, RMSE, R²  
10. Visualize outputs  
11. Save model + scalers  

---

## 📏 Evaluation Metrics

- **MAE (Mean Absolute Error)**  
- **RMSE (Root Mean Square Error)**  
- **R² Score**  

These measure prediction accuracy and model reliability.

---

## 🧪 Dummy Data Generation (for Feature Expansion)

To simulate real poultry-farm conditions, we generated biologically accurate dummy values:

### ✔ Age  
Starts at 20 weeks and increases daily.

### ✔ Feed Intake  
105–125 grams per bird per day.

### ✔ Breed  
Randomized among:  
- White Leghorn (0)  
- Hy-Line Brown (1)  
- ISA Brown (2)

### ✔ Body Weight  
1400–1850g depending on age.

### ✔ Mortality  
0–2 birds/day.

A new file `purairDataset_augmented.csv` is created containing these values.

---

## 📡 Monitoring Strategy for Future Real Deployment

### 🟦 Age  
Auto-calculated by the system once flock's starting age is entered.

### 🟧 Feed Intake  
- **Now:** Manual entry  
- **Future:** IoT load-cell feed hopper

### 🟪 Breed  
Static input during flock onboarding.

### 🟩 Body Weight  
- **Now:** Random-sample weighing (manual)  
- **Future:** Smart IoT weighing perch

### 🟥 Mortality  
Simple daily manual entry.

---

## 🛠 Tech Stack

| Layer | Tools |
|-------|-------|
| Hardware | ESP32, MQ135, DHT11, Load Cell (HX711) |
| AI / Backend | Python, TensorFlow, Keras |
| ML Utilities | NumPy, Pandas, Scikit-learn |
| Visualization | Matplotlib |
| Model Files | `.h5` model, `.pkl` scalers |
| Dataset | purairDataset2.csv + augmented features |

---

---

## 🌱 Why PURAIR Matters

Indian poultry farms face massive losses due to:

- Unexpected egg drops  
- Poor environmental monitoring  
- Disease outbreaks  
- Unoptimized feed usage  

**PURAIR** brings:

- Data-driven forecasting  
- Affordable IoT sensing  
- AI-powered insights  
- Scalable architecture  

It is a major step toward **precision poultry farming in India**.

---

## 🧭 Future Scope

- Transformer-based forecasting models  
- Automated real-time dashboard (Firebase / FastAPI)  
- Perch-based auto-weighing system  
- Feed planning engine  
- Disease prediction using anomaly analysis  
- Mobile app for farmers  
- Cloud Functions for auto-triggered inference  

---

## 👥 Team ZERO

- **Hrudhay H** — AI & ML and Data Analysis
- **Aditya Manhas** — Full-Stack + Pipelining
- **Abhishek A R** — Hardware + IoT
- **R Sujay Bharadwaj** — IoT + UI/UX desigining


---

## 📝 License

This project is open-source under the MIT License.

---





