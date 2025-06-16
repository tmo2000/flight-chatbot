# ✈️ Flight Price Finder Chatbot

This chatbot helps users search for **available flights** between cities using natural language. It's designed to simulate a real-time flight inquiry assistant by returning flight information based on a predefined dataset.

---

## 📦 Project Features

- 💬 Chatbot interface for natural flight queries
- 🔍 Supports limited routes listed in `flights.json`
- ⏱ Shows departure and arrival times
- 🛫 Displays flight status (On Time, Delayed, Boarding, etc.)
- 🎯 Built with React (frontend) and Flask/Node (backend)

---

## 🧪 Example User Queries

- "What are the available flights from Dubai to Lagos?"
- "Show me flights from Lagos to Kigali"
- "Is there a delayed flight to New York?"
- "What time is EK783 leaving Dubai?"

---

## ✈️ Available Flights (Static)

The chatbot currently supports **only the following flights** from your `flights.json` file:

| Flight No. | From               | To                        | Departs | Arrives | Status     |
|------------|--------------------|----------------------------|---------|---------|------------|
| EK215      | Dubai (DXB)        | London Heathrow (LHR)      | 22:00   | 02:30   | On Time    |
| EK201      | Dubai (DXB)        | New York JFK (JFK)         | 08:30   | 14:15   | Delayed    |
| EK149      | Dubai (DXB)        | Amsterdam Schiphol (AMS)   | 15:45   | 20:20   | On Time    |
| EK761      | Dubai (DXB)        | Johannesburg (JNB)         | 04:15   | 10:00   | Cancelled  |
| EK419      | Sydney (SYD)       | Dubai (DXB)                | 21:10   | 05:30   | On Time    |
| EK99       | Dubai (DXB)        | Munich (MUC)               | 12:00   | 16:50   | Delayed    |
| EK203      | Dubai (DXB)        | Los Angeles (LAX)          | 03:00   | 11:20   | Boarding   |
| EK231      | Dubai (DXB)        | Washington Dulles (IAD)    | 09:45   | 17:05   | On Time    |
| EK978      | Kuwait (KWI)       | Dubai (DXB)                | 13:25   | 15:00   | Landed     |
| EK347      | Kuala Lumpur (KUL) | Dubai (DXB)                | 02:40   | 05:50   | On Time    |
| EK729      | Dubai (DXB)        | Kigali (KGL)               | 02:10   | 06:45   | On Time    |
| EK730      | Kigali (KGL)       | Dubai (DXB)                | 08:15   | 14:30   | Delayed    |
| EK783      | Dubai (DXB)        | Lagos (LOS)                | 12:00   | 16:30   | On Time    |
| EK784      | Lagos (LOS)        | Dubai (DXB)                | 18:05   | 05:20   | Boarding   |
| EK785      | Kigali (KGL)       | Lagos (LOS)                | 10:30   | 13:00   | Cancelled  |
| EK786      | Lagos (LOS)        | Kigali (KGL)               | 15:15   | 17:45   | On Time    |

---

## 🛠️ Installation (Local Setup)

```bash
# Clone the repository
git clone https://github.com/your-username/flight-price-chatbot.git
cd flight-price-chatbot

Frontend (React)
bash
Copy
Edit
cd client
npm install
npm run dev
Backend (Python Flask or Node)
bash
Copy
Edit
cd server
npm install  # or pip install -r requirements.txt for Flask
npm run dev  # or flask run

## 📁 File Structure
bash
Copy
Edit
flight-price-chatbot/
├── client/              # React frontend
├── server/              # Flask or Node backend
├── flights.json         # Static flight data
├── README.md

## 🔮 Future Improvements
✅ Add real-time API integration (Skyscanner, Kiwi, etc.)

🔐 Add user accounts and flight alerts

📆 Add flexible date and pricing filters

📱 Add voice support for flight queries

