# Professional Portfolio Website

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Designed to be hosted on GitHub Pages.

## 🌐 Live Website

This site will be available at: `https://tc-personal.github.io/professional-website/`

(Or `https://yourusername.github.io` if deployed to a user/organization pages repository)

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Easy Customization** - CSS variables for quick color scheme changes
- **Lightweight** - No frameworks or dependencies, pure vanilla JavaScript
- **SEO Friendly** - Semantic HTML and proper meta tags
- **Fast Loading** - Optimized for performance

## 📂 Project Structure

```
Professional Website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript for interactivity
├── images/             # Your images (profile pic, project screenshots, etc.)
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🚀 Quick Start

### 1. Customize Your Content

Edit `index.html` to add your personal information:
- Update the name in the navigation and hero section
- Modify the tagline to match your profession
- Add your projects in the Projects section
- Update skills in the Skills section
- Add your contact information and social media links

### 2. Customize Colors (Optional)

Edit CSS variables in `css/style.css` to change the color scheme:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e40af;  /* Darker shade */
    --accent-color: #3b82f6;     /* Accent elements */
}
```

### 3. Add Your Images

Place your images in the `images/` folder:
- Profile photo
- Project screenshots
- Any other visual assets

### 4. Test Locally

Simply open `index.html` in your web browser to preview your site locally.

## 📤 Deploy to GitHub Pages

### Option 1: Project Pages (Recommended)

1. Create a new repository on GitHub named `professional-website`

2. Initialize and push your code:
```bash
cd "Professional Website"
git add .
git commit -m "Initial commit: Professional portfolio website"
git remote add origin git@github.com:tc-personal/professional-website.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click "Save"

4. Your site will be live at: `https://tc-personal.github.io/professional-website/`

### Option 2: User Pages

For a site at `https://tc-personal.github.io`:

1. Create a repository named exactly: `tc-personal.github.io`
2. Follow steps 2-3 above
3. Your site will be live at: `https://tc-personal.github.io/`

## 🎨 Customization Tips

### Adding New Projects

Copy this template in the Projects section:

```html
<div class="project-card">
    <h3>Project Title</h3>
    <p>Brief description of your project...</p>
    <div class="tech-stack">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
    <a href="#" class="project-link">View Project →</a>
</div>
```

### Adding New Sections

Create a new section with this structure:

```html
<section id="new-section" class="section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

Don't forget to add it to the navigation menu!

### Changing Fonts

To use custom fonts, add this to the `<head>` of `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font-family in `style.css`:

```css
body {
    font-family: 'Inter', sans-serif;
}
```

## 📱 Responsive Breakpoints

The site is responsive with breakpoints at:
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🔧 Technical Details

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Custom Properties, Animations
- **JavaScript (ES6)** - Smooth scrolling, intersection observers
- **No dependencies** - Pure vanilla code

## 📝 To-Do / Future Enhancements

- [ ] Add blog section
- [ ] Integrate with a contact form service
- [ ] Add dark mode toggle
- [ ] Add more animation effects
- [ ] Create a mobile hamburger menu
- [ ] Add analytics (Google Analytics)
- [ ] Add resume download functionality

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Tim Chowdary - [tim.chowdary@gmail.com](mailto:tim.chowdary@gmail.com)

---

**Built with ❤️ using HTML, CSS, and JavaScript**


