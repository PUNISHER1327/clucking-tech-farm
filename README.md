# PURAIR 🐔🌱 – Smart Poultry Air Quality Monitoring System

An AI + IoT-based real-time environmental monitoring solution designed to ensure healthy air quality in poultry farms — improving bird health, increasing egg production, and reducing labor burden through automation.

🏆 **Winner – Hacksprint 5.0** (IoT Domain)  
📍 *National Level 24-Hour Hackathon | PES College of Engineering, Mandya*

---

## 🚀 Overview

PURAIR addresses the often-overlooked issue of **air quality in poultry farms** by integrating **real-time sensor data collection**, **automated alerting**, and **smart actuation**. Built in 24 hours during a hackathon, this solution monitors **NH₃**, **CO₂**, **temperature**, and **humidity**, then takes action when thresholds are breached to ensure optimal farm conditions.

---

## ⚙️ Features

- 📡 **Sensor Integration**: NH₃, CO₂, Temperature, Humidity
- 🔔 **Automated Alerts**: Real-time SMS/Notification for critical levels
- 🌀 **Smart Actuation**: Auto activation of fans and misting systems
- 📊 **Dashboard (optional)**: Live data visualization using [platform]
- 📈 **Impact**: Higher egg production, better bird health, reduced labor
- 💻 **ML-Model**: https://colab.research.google.com/drive/1F1q22qs-WuLFsVUF5o1hoKle1MJkIH2i?usp=sharing

---

## 🧠 Tech Stack

| Layer             | Technologies/Components                         |
|------------------|--------------------------------------------------|
| Hardware         | MQ-135, DHT11, CO₂ Sensor, ESP32/Arduino         |
| Firmware         | Arduino IDE, Embedded C                          |
| Backend          | Supabase                                         |
| Communication    | Serial/WiFi (ESP32), MQTT (optional)             |
| Automation Logic | Threshold-based conditions, actuator control     |
| Dashboard        | [ThingSpeak / Blynk / Custom Web App]            |

---

## 🧪 System Block Diagram

```plaintext
[Sensors] → [Microcontroller (ESP32/Arduino)] → [Processing Logic]
           → [Cloud/Dashboard]  
           → [Actuators (Fan, Misting)]
