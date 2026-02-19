# Experiment 5.2 – Route-Based Lazy Loading in SPA

## 👨‍🎓 Student Information

Name: Abhishek Thakur  
UID: 23BAI71440  
Course: Full Stack Development  
Experiment No: 5.2  
Project Name: exp-5.2 

---

# 🎯 Aim

To implement route-based lazy loading in a Single Page Application (SPA) using React.js in order to improve performance by loading route components only when required.

---

# 🛠 Technologies Used

- React.js
- React Router DOM
- JavaScript
- HTML & CSS
- VS Code
- Node.js

---

# 📚 Theory

Lazy loading is a performance optimization technique in which components are loaded only when needed instead of loading all components at once.

In a Single Page Application (SPA), multiple routes exist (like Home, About, Dashboard). If we load all route components at startup, the application becomes heavy and slower.

Using:

- `React.lazy()` → to dynamically import components
- `Suspense` → to display a loading message while component loads

we reduce initial bundle size and improve application speed.

This is called **Route-Based Lazy Loading**.

---

# ⚙️ Procedure

1. Created a React application using:

2. Installed React Router:

3. Created three route components:
- Home
- About
- Contact

4. Applied `React.lazy()` to dynamically import route components.

5. Wrapped all routes inside `Suspense` component.

6. Ran the project.

   

# 🧠 Working Explanation

- When the application starts, no route components are loaded immediately.
- When user clicks Home → Home component loads dynamically.
- When user clicks About → About component loads dynamically.
- When user clicks Dashboard → Dashboard component loads dynamically.
- During loading, Suspense shows:

  "Lazy Loading..."

This proves that route components are loaded only when accessed.

----------

## 1️⃣ Home Page Output

After clicking "Home", the Home page is loaded dynamically.

<img width="1600" height="655" alt="image" src="https://github.com/user-attachments/assets/28fff2ff-151d-4dd5-904d-236616827d1e" />


Example Description:
- Displays student name
- Displays UID
- Modern card UI

---

## 2️⃣ Lazy Loading Screen

When navigating between routes, the following loading screen appears:

<img width="1600" height="798" alt="image" src="https://github.com/user-attachments/assets/11e4f85d-7808-4768-a6fc-1c1adcea82e0" />


Screen shows:
"Lazy Loading..."

This confirms Suspense fallback is working.

---

## 3️⃣ About Page Output

After clicking "About":

<img width="1600" height="672" alt="image" src="https://github.com/user-attachments/assets/987abacc-5a7d-47b8-98b0-1ed18b82c0fe" />


- Explains experiment
- Loaded only when route is accessed

---

## 4️⃣ Contact Page Output

After clicking "Contact":

<img width="1916" height="900" alt="image" src="https://github.com/user-attachments/assets/96fc235d-4ff6-4ff7-839b-388d9c993488" />



- Displays Skills section
- Loaded dynamically using React.lazy()



# 📊 Performance Benefit

Without Lazy Loading:
- All components load at startup
- Large bundle size
- Slower initial load

With Route-Based Lazy Loading:
- Components load only when needed
- Reduced initial bundle size
- Faster startup time
- Better performance


# ✅ Result

Route-Based Lazy Loading was successfully implemented in the React Single Page Application using React.lazy() and Suspense.

All route components are loaded dynamically when accessed, improving performance and reducing initial load time.


# 🚀 Conclusion

This experiment demonstrates how route-based lazy loading improves performance in React applications by dynamically loading route components only when needed.

The implementation was successful and working correctly.
