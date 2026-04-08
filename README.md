# BOSS - Global APC Map

## 🌍 Overview
**Global APC Map** is a high-performance, responsive 3D geospatial visualization tool designed to display the **Abroad Program Coordinators (APC)** of [**Bhanushali Overseas Support System (BOSS)**](https://www.bhanusamaj.org/boss/). tool is built with the aim to connect the members of the organization with their respective coordinators across the globe. 

Utilizing a modern glassmorphic aesthetic and the power of **Globe.gl**, it provides an immersive, interactive experience for browsing professional networks across international boundaries.

## ✨ Features
* **Interactive 3D Globe**: Powered by Globe.gl/Three.js with hardware-accelerated auto-rotation, smart point-of-view centering, and customizable zoom controls.
* **Intelligent Search Engine**: Features a real-time autocomplete dropdown that supports multi-parameter queries (Name, City, or Country) with automatic camera "fly-to" animations.
* **Unified Responsive Drawer System**:
    * **Desktop**: A sleek, persistent sidebar for managing filters and browsing the directory.
    * **Mobile**: An optimized bottom-sheet drawer for better reachability on small screens.
* **Advanced Multi-Criteria Filtering**: Dynamic filtering by **Qualification**, **Profession**, **City**, or **Country** with live results counting and active filter badges.
* **Rich Profile Modals**: Glassmorphic UI popups containing profile imagery, biographical descriptions, and detailed contact information.
* **Optimized Performance**: Smooth UI transitions using CSS3 backdrop-filters and custom keyframe animations.

## 🛠️ Tech Stack
* **Core Engine**: [Globe.gl](https://github.com/vasturiano/globe.gl) (Three.js/WebGL wrapper).
* **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3.
* **Design**: Glassmorphic UI with Backdrop-Blur and Linear Gradients.
* **Typography**: Inter (Google Fonts).

## 🚀 Getting Started
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/coder-jkb/Gobal-APC-Search-BOSS.git
    ```
2.  **Launch the Application**:
    Open `index.html` in any modern web browser. No complex build steps or dependencies are required.

## 📂 Data Customization
To update the directory, modify the `locations` constant within the `<script>` section of `index.html`:

```javascript
const locations = [
    {
        lat: 19.0760, // Latitude
        lng: 72.8777, // Longitude
        title: "Full Name",
        city: "City Name",
        country: "Country Name",
        description: "Professional bio or summary...",
        qualification: "Educational Background",
        profession: "Job Title",
        email: "contact@example.com",
        contact: "+00 00000 00000",
        image: "https://url-to-profile-image.jpg"
    }
];
```

---
*Built for seamless professional visualization and global connectivity.*