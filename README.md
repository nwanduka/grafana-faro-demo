# Grafana Faro Demo - Task Manager App

A simple task manager web application instrumented with **Grafana Faro Web SDK** to demonstrate real user monitoring (RUM) and frontend observability.

This project was created as part of the **[Grafana Emerging Champions Mentorship Programme](https://community.grafana.com/t/grafana-emerging-champions-mentorship-programme/156954)** to learn hands-on implementation of frontend monitoring using Grafana Faro.

## 🎯 Project Goals

- Learn how to instrument a web application with Grafana Faro SDK
- Understand how frontend telemetry data is collected and visualized
- Explore real user monitoring (RUM) concepts in practice
- Configure and send data to Grafana Cloud for analysis

## 🚀 What This App Does

This is a minimal task manager that allows users to:
- Add new tasks
- Mark tasks as complete
- Delete tasks
- All user interactions are tracked and sent to Grafana Cloud via Faro SDK

## 📊 What Gets Monitored

The Grafana Faro SDK captures:
- **Page loads and navigation** - Time to interactive, page load performance
- **User interactions** - Button clicks, task creation/completion/deletion events
- **JavaScript errors** - Any frontend errors that occur
- **Console logs** - Application logs for debugging
- **Web vitals** - Core Web Vitals metrics (LCP, FID, CLS)

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Monitoring**: Grafana Faro Web SDK
- **Backend**: Grafana Cloud (for data collection and visualization)

## 📁 Project Structure
```
grafana-faro-demo/
│
├── README.md          # Project documentation
├── index.html         # Main HTML file
├── script.js          # App logic + Faro SDK initialization
├── styles.css         # Styling
└── package.json       # Dependencies
```

## 🖥️ Running Locally

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Grafana Cloud account (free tier works) - [Sign up here](https://grafana.com/auth/sign-up/create-user)

### Steps

1. **Clone the repository**
```bash
   git clone https://github.com/nwanduka/grafana-faro-demo.git
   cd grafana-faro-demo
```

2. **Install dependencies** (optional, for local dev server)
```bash
   npm install
```

3. **Configure Faro SDK** (if not already configured)
   - Open `script.js`
   - Update the Faro configuration with your Grafana Cloud endpoint:
```javascript
   const faro = initializeFaro({
     url: 'YOUR_GRAFANA_CLOUD_FARO_ENDPOINT',
     app: {
       name: 'task-manager-demo',
       version: '1.0.0',
     },
   });
```

4. **Open the app**
   - Simply open `index.html` in your browser
   - Or use a local server:
```bash
     npx serve .
```
   - Navigate to `http://localhost:3000`

5. **Verify data in Grafana Cloud**
   - Log into your Grafana Cloud instance
   - Navigate to **Explore** → **Faro**
   - You should see telemetry data from your interactions with the app

## 📈 What You'll See in Grafana

After using the app, you can explore in Grafana Cloud:
- **Session traces** - Complete user sessions with all interactions
- **Error tracking** - Any JavaScript errors that occurred
- **Performance metrics** - Page load times, Web Vitals
- **Custom events** - Task creation, completion, deletion events
- **User journey visualization** - How users interact with the app

## 🎓 Learning Outcomes

Through this project, I learned:
- How to integrate observability into frontend applications
- Real User Monitoring (RUM) concepts and implementation
- How telemetry data flows from browser to backend
- How to configure and use Grafana Faro SDK
- Best practices for frontend instrumentation

## 🔗 Resources

- [Grafana Faro Documentation](https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/)
- [Grafana Faro Web SDK](https://github.com/grafana/faro-web-sdk)

## 📝 License

This project is open source and available under the MIT License.

----

*Special thanks to Marie Cruz ([@mdcruz](https://github.com/mdcruz)) for her guidance on this project and throughout the mentorship programme. You rock 🤘*
