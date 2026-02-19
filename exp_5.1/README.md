# Experiment 5.1 – Component Lazy Loading using React.lazy() and Suspense

# 👨‍🎓 Student Information

Name: Abhishek Thakur  
UID: 23BAI71440  
Course: Full Stack Development  
Unit: 5 – Optimize Frontend Performance Using Lazy Loading  
Project Name: exp-5.1 

# 🎯 Aim

To optimize frontend performance by implementing lazy loading of components in a Single Page Application (SPA) using React.lazy() and Suspense.

---

# 🛠 Software Requirements

- Node.js
- React.js
- React Router DOM
- VS Code
- Web Browser (Chrome)

---

# 📚 Theory

Lazy loading is a performance optimization technique where components are loaded only when they are required.

In a normal React application, all components are loaded when the application starts. This increases the initial bundle size and slows down page loading.

Using:

- `React.lazy()` → dynamically imports a component
- `Suspense` → displays fallback UI while the component loads

we can reduce initial loading time and improve performance.

This experiment demonstrates component-level lazy loading where the Dashboard component loads only when the user navigates to it.

---

# ⚙️ Procedure

1. Create a React application:

2. Install React Router:

3. Create multiple components:
- Home
- Dashboard

4. Import Dashboard using `React.lazy()`.

5. Wrap the lazy component inside `Suspense`.

6. Run the project:


---

# 📂 Project Structure

src
│
├── components
│ ├── Home.js
│ └── Dashboard.js
│
├── App.js
├── App.css
└── index.js


# 🧠 Working Explanation

- The Home component loads normally.
- The Dashboard component is imported using React.lazy().
- When the user clicks "Dashboard":
  - React starts loading the component dynamically.
  - Suspense displays fallback UI:
  
    "Lazy Loading..."

- After loading completes, the Dashboard page appears.

This proves that the component is not loaded at startup but only when required.



# 1️⃣ Home Page Output

After opening the application, the Home page appears.

<img width="1600" height="730" alt="image" src="https://github.com/user-attachments/assets/69f3ca38-fe4e-4460-9eca-a5a85a8594a0" />


Description:
- Displays student name
- Displays UID
- Navigation links (Home & Dashboard)


# 2️⃣ Lazy Loading Screen

When clicking on "Dashboard", the loading message appears.

<img width="1600" height="505" alt="image" src="https://github.com/user-attachments/assets/7a9e4eb1-a912-41b8-a1c7-91931a706eb4" />


Screen shows:
"Lazy Loading..."

This confirms Suspense fallback is working.


# 3️⃣ Dashboard Page 

After loading completes:

<img width="1600" height="751" alt="image" src="https://github.com/user-attachments/assets/d8cc38a3-11dc-4fdb-94a0-27f8a9b29ce9" />

Description:
- Displays Dashboard title
- Displays Skills section
- Component loaded dynamically

# 📊 Performance Benefit

Without Lazy Loading:
- All components load at startup
- Larger bundle size
- Slower initial load

With Component Lazy Loading:
- Only required component loads
- Reduced initial bundle size
- Faster page load
- Improved performance


✅ Result

Component lazy loading was successfully implemented using React.lazy() and Suspense.

The Dashboard component loads only when the user navigates to it, reducing the initial bundle size and improving frontend performance.


 🚀 Conclusion

This experiment demonstrates how React.lazy() and Suspense can be used to implement component-level lazy loading in a Single Page Application.

The implementation successfully reduces initial load time and optimizes frontend performance.
