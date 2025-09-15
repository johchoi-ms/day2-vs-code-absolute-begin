# 🎯 VS Code Interactive Research Presentation - Your Session Guide

*Follow along with this guide during our session and take it home as your reference for creating interactive research presentations.*

---

## 📋 **What We're Building Today**

**The Challenge**: Transform static PowerPoint slides into an explorable, interactive research presentation where stakeholders can filter findings, explore user journeys, and dive deep into insights independently.

**Your Starting Point**: Traditional slide content about mobile checkout research  
**Your End Result**: Interactive dashboard with navigation, filtering, and clickable elements  
**Your Method**: Using AI code generation - you describe what you want, the tool generates the code

---

## 🎬 **Session Overview (60 Minutes)**

### **Phase 1: See the Destination (5 min)**
We'll start by exploring the final result so you know where we're headed.

### **Phase 2: Setup Your Workspace (15 min)**  
Get oriented in VS Code and preview your starting materials.

### **Phase 3: AI Transformation (30 min)**
Three rounds of AI collaboration to transform your content:
- **Round 1**: Structure & Navigation  
- **Round 2**: Professional Styling  
- **Round 3**: Interactive Features

### **Phase 4: Reflection & Next Steps (10 min)**
Compare before/after and plan how to use this in your work.

---

## 🚀 **Phase 1: The Destination Preview**

*First, let's look at what you'll be building. Open the `sample-slides-visual.html` file in VS Code and preview it (right-click → "Open with Live Server" or similar). This shows you the kind of interactive presentation you can create. Don't worry about understanding how it works - just focus on what it does and how it could change your research presentations.*

**Key Things to Notice:**
- **Navigation Tabs**: Switch between different views of the same research
- **Real-time Filtering**: Filter findings by severity or user type instantly  
- **Interactive Journey**: Click on user journey steps to explore pain points
- **Explorable Quotes**: Filter participant quotes by user segment
- **Self-Service Insights**: Stakeholders can explore without interrupting your presentation flow

**The Magic**: Same research content, same insights - just presented in a way that lets stakeholders explore independently instead of asking you to "go back to slide 3."

---

## 🔧 **Phase 2: Your Workspace Setup**

### **Step 1: Open Your Working Folder**
```
File → Open Folder → Select "clean-starter-template" folder
```
*This is your project workspace - like organizing all files for a research project in one folder.*

### **Step 2: Install Live Server Extension**  
```
Extensions panel → Search "Live Server" → Install
```
*Think of this like a Figma plugin that adds superpowers - in this case, live preview of your changes.*

### **Step 3: Explore Your Starting Materials**
Your folder contains:
- **`index.html`** - Your slide content organized as basic web structure  
- **`styles.css`** - Simple styling foundation
- **`research-data.js`** - Mobile checkout research data (participants, findings, quotes)
- **`SESSION-GUIDE.md`** - This guide you're reading

### **Step 4: Preview Your Starting Point**
```
Right-click on index.html → "Open with Live Server"
```
*This opens your starting slide content in the browser. You'll see basic research presentation content - this is what we'll transform.*

**What You're Seeing**: Research content organized like slides but in web format - research goal, key findings, user quotes, recommendations. It looks simple now, but AI will transform it into something powerful.

---

## 🤖 **Phase 3: AI Transformation Rounds**

*This is where the magic happens. You'll have conversations with AI to transform your basic content into an interactive presentation.*

### **Opening the AI Tool**
```
Open Copilot Chat panel (Ctrl+Shift+I or Cmd+Shift+I on Mac)
```
*This tool can generate code based on your descriptions and requests.*

---

### **Round 1: Structure & Navigation (15 minutes)**

**What We're Doing**: Adding navigation tabs and organization so stakeholders can explore different aspects of your research.

**Your AI Prompt** *(copy and paste this):*
```
I have research content formatted as slides, and I want to transform it into an interactive research dashboard. Please add navigation tabs for Overview, User Journey, Key Findings, User Quotes, and Recommendations. Make the content more explorable with filtering capabilities.

Please edit index.html and styles.css to implement these changes.
```

*💡 **Pro Tip**: Notice how we specified which files to edit (index.html and styles.css). You can always tell the AI tool which specific files you want it to work with - this helps it make precise changes to the right places.*

**What to Notice While AI Works:**
- You described the outcome in plain language - no technical jargon needed
- The tool interprets UX concepts like "dashboard," "navigation tabs," and "explorable"
- You provide the vision and requirements, the tool generates the implementation

**The Result**: Your content now has professional navigation and can be explored in different ways instead of one linear slide sequence.

---

### **Round 2: Professional Styling (10 minutes)**

**What We're Doing**: Making your presentation look polished and executive-ready.

**Your AI Prompt** *(copy and paste this):*
```
Style this research presentation for executive stakeholders with modern gradients, clean typography, and a professional color scheme. Make it look polished and presentation-ready.

Please update the styles.css file to implement these visual improvements.
```

*💡 **Context Matters**: By specifying "styles.css file" we're directing the tool to focus on the styling. You can always add context like "update the navigation in index.html" or "modify the data structure in research-data.js" to guide where changes should be made.*

**What to Notice:**
- Same research content, but now it looks like something you'd proudly show to executives
- The tool generates all the visual design complexity - you just described the aesthetic goal
- Colors, fonts, spacing, layout - all handled automatically

**The Result**: Your interactive presentation now has professional visual design that commands attention and respect.

---

### **Round 3: Interactive Features (10 minutes)**

**What We're Doing**: Adding the "wow factor" interactions that make your research truly explorable.

**Your AI Prompt** *(copy and paste this):*
```
Add smooth filtering animations, hover effects on the journey map steps, and make the pain points clickable to show detailed information. Enhance the user experience with micro-interactions.

Please enhance both index.html and styles.css to add these interactive features.
```

*💡 **File Targeting**: Notice we specified both files since interactions often require HTML structure changes AND CSS styling. The more specific you are about which files need updates, the more precise the tool's edits will be.*

**What to Notice:**
- This is where it gets exciting - your presentation now has sophisticated behavior
- Filtering, clicking, hovering - all the interactions stakeholders expect from modern tools
- The tool can interpret interaction design concepts and generate appropriate code

**The Result**: A fully interactive research presentation that stakeholders can explore independently, with professional polish and engaging interactions.

---

## 🎯 **Phase 4: Reflection & Your Next Steps**

### **The Transformation You Just Accomplished**

**Before**: Static slides requiring you to navigate and explain everything  
**After**: Self-service research exploration where stakeholders can filter, click, and discover insights independently

**Same Research + New Presentation = Empowered Stakeholders**

### **How This Changes Your Research Process**
- **Presentation Day**: Stakeholders can explore while you facilitate discussion instead of clicking through slides
- **Follow-up Questions**: "Can you show me just the enterprise user feedback?" → They can filter it themselves
- **Stakeholder Engagement**: Interactive exploration keeps attention better than passive slide viewing
- **Research Impact**: Insights become more memorable when people discover them through interaction

---

## 🚀 **Take This Further: Additional Prompts for Your Own Projects**

### **Customize for Your Brand**
```
Adjust the color scheme to match my company brand. Use [your primary color] as the main accent and ensure good accessibility contrast ratios.
```

### **Add Different Research Data**
```
Help me adapt this structure for [usability testing/survey results/interview synthesis]. I want to display [specific data types] in a similar interactive format.
```

### **Mobile Optimization**
```
Optimize this presentation for mobile viewing, ensuring all interactions work well on touch devices and small screens.
```

### **Advanced Features**
```
Add a search functionality where users can search through quotes, findings, and recommendations. Include highlighting of search terms in results.
```

---

## 💡 **Key Principles for AI Collaboration**

### **Always Specify Which Files to Edit**
🎯 **Most Important**: Tell the AI tool which files you want it to work with  
- ✅ "Please update index.html to add navigation tabs"
- ✅ "Modify the styles.css file to improve the color scheme"  
- ✅ "Edit both index.html and styles.css for this change"
- ❌ "Make the page look better" (no file context)

*Why this matters: The tool can see all your files but needs to know where to make changes. Being specific prevents edits to the wrong files.*

### **Speak in UX Language**
- Use "dashboard" instead of "webpage"  
- Say "explorable" instead of "interactive"
- Describe "filtering" instead of "sorting functionality"
- Talk about "user experience" instead of "code behavior"

### **Describe Outcomes, Not Methods**
❌ "Add JavaScript click handlers to the navigation"  
✅ "Make the navigation tabs clickable to switch between different views"

### **Build Gradually**
1. **Structure first** - Get the organization and navigation working
2. **Style second** - Make it look professional and polished  
3. **Interactions last** - Add the engaging behaviors and animations

### **Your Role vs. Tool Capabilities**
- **You decide**: What should the experience be? Who's the audience? What do they need to explore?
- **The tool handles**: The technical implementation, browser compatibility, responsive design, performance optimization

---

## 📚 **Resources in This Folder**

### **Your Working Files**
- **`index.html`** - Your presentation file (this gets transformed during the session)
- **`styles.css`** - Styling file (AI will enhance this)  
- **`research-data.js`** - Your research data (reusable structure for your own projects)

### **Reference Materials**  
- **`traditional-slides-content.md`** - Text version of slide content for easy copying
- **`sample-slides-visual.html`** - Visual example of traditional slide format

### **What Happens Next**
After the session, you'll have:
- ✅ A working interactive research presentation
- ✅ Understanding of the AI collaboration process  
- ✅ Prompts you can reuse for your own research content
- ✅ A template structure you can adapt for future projects

---

## 🎯 **Your Success Checklist**

**By the end of today's session, you should feel:**
- ✅ Excited about the possibilities of AI collaboration
- ✅ Confident that you can transform your own research presentations  
- ✅ Clear on how this fits into your current research workflow
- ✅ Ready to experiment with AI-powered creation tools

**You don't need to:**
- ❌ Understand HTML, CSS, or JavaScript syntax
- ❌ Remember specific VS Code shortcuts  
- ❌ Know how to debug technical issues
- ❌ Memorize the AI prompts (they're all here in this guide!)

---

## 💪 **You've Got This!**

*Remember: You just learned to have design conversations that result in functional, interactive presentations. The tool handles the technical complexity while you focus on the user experience and research storytelling.*

**This is the future of research presentation - and you're now equipped to create it.** 🚀

---

*Keep this guide handy for your future AI-powered presentation projects!*