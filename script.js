const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const projectData = {
    "WEB DEV": [
        { 
            type: "image", 
            src: "images/web_anime.png", 
            link: "https://ehb-mct.github.io/web2-course-project-front-end-StijnBruynbroeck/", 
            title: "Mood-Based Anime Recommender", 
            desc: "A full-stack application that suggests anime based on your emotional state. Features a complete user authentication system, persistent database storage, and local tracking for decision history.", 
            tech: ["Full Stack", "Database", "Auth", "Local Storage"] 
        }
    ],
    "DESIGN": [
        { 
            type: "image", 
            layout: "tall",
            src: "images/poster.png", 
            title: "Marvel Data Visualization", 
            desc: "An infographic poster created from a real Marvel dataset. Transforms raw statistics into a compelling visual narrative.", 
            tech: ["Illustrator", "Data Viz", "Infographics"] 
        },
        { 
            type: "image",
            layout: "tall", 
            src: "images/festival.png", 
            title: "Film Festival UI", 
            desc: "User Interface design for a movie festival web application. Focuses on accessibility, hierarchy, and visual identity.", 
            tech: ["Figma", "UI/UX", "Web Design"] 
        },
        { 
            type: "image", 
            src: "images/moodboard.png", 
            title: "Moodboard: FEAR", 
            desc: "A conceptual visual study exploring the theme of 'Fear'. Focuses on atmosphere, texture, and color psychology.", 
            tech: ["Photoshop", "Concept Art", "Composition"] 
        }
    ],
  "VR / AR": [
        { 
            type: "gallery", 
            src: [
                "images/plant-vr.png", 
                "images/plant-vr-2.png"
            ], 
            title: "Bio-Network: Plant Communication", 
            desc: "An immersive simulation of how flora communicate. Features a reactive ecosystem where touching a mushroom triggers a 'danger signal' across the network. Includes a real-time season switching mechanic.", 
            tech: ["Unity", "OpenXR", "C#", "VFX Graph"] 
        }
    ],
    
    "3D ART": [
        { 
            type: "video", 
            src: "Yx07ptjSCAs", 
            title: "Character Rigging & Animation", 
            desc: "A fully rigged character model showcased with custom animation. Created in the 3D Modeling & Animation course.", 
            tech: ["Maya", "Rigging", "Animation"] 
        },
        { 
            type: "image", 
            src: "images/sword.jpg", 
            title: "Textured House Model", 
            desc: "A fully modeled and textured residential building.", 
            tech: ["Maya", "Texturing", "Arnold"] 
        },
        { 
            type: "image", 
            src: "images/house.jpg", 
            title: "Sword in the Stone", 
            desc: "High-poly modeling exercise focusing on environmental storytelling.", 
            tech: ["Maya", "Modeling"] 
        },
        
    ],

   "FINAL WORK": [
        { 
            type: "video", 
            src: "JRFxRkw4Q-k", 
            title: "Final Work: NUI Stealth Game", 
            desc: "An innovative 3D stealth game built in Unity. Traditional menus have been replaced by a fully voice-controlled Natural User Interface (NUI). Powered by a 100% local AI architecture (Whisper for speech-to-text and Llama 3 via Ollama for semantic logic), the player can survive by transforming into everyday objects to hide from enemies.", 
            tech: ["Unity", "Ollama", "Whisper.cpp", "Blender"] 
        }
    ],
    "SIDE_OPS": [
        { 
            type: "local-video",
            src: "videos/Shortfilm0001-0250.mp4", 
            title: "3D Animation Study", 
            desc: "A self-directed study focusing on 3D animation principles, exploring timing, weight, and dynamic camera movement.", 
            tech: ["Blender", "Animation", "Keyframing"] 
        },
        { 
            type: "image", 
            src: "images/Donut_final_render.png", 
            title: "The Blender Donut", 
            desc: "The 3D rite of passage. Completed the full Blender Guru 4.0+ curriculum, covering modeling, procedural geometry nodes for sprinkles, and photorealistic rendering.", 
            tech: ["Blender", "Geometry Nodes", "Cycles"] 
        },
        { 
            type: "image", 
            src: "images/Bike_Final_Render.png", 
            title: "Vertex-Modeled Bike", 
            desc: "Complex hard-surface modeling project. Built vertex-by-vertex to ensure clean topology, accurate scale, and mechanical realism.", 
            tech: ["Blender", "Hard Surface", "Poly Modeling"] 
        },
        { 
            type: "image", 
            src: "images/Wall_Texturing_Final_render.png", 
            title: "Photoreal Brick Wall", 
            desc: "Advanced texturing and shading study. Focused on node-based workflows, displacement maps, and PBR (Physically Based Rendering) to achieve realistic surface detail.", 
            tech: ["Blender", "Shading Nodes", "PBR"] 
        },{ 
            type: "local-video", 
            src: "videos/SpiderMan0001-0135.mp4", 
            title: "Spider-Man: Dynamic City Swing", 
            desc: "A 3D character animation study featuring a rigged Spider-Man traversing a cityscape. Focused on conveying weight, momentum, complex body mechanics, and dynamic camera tracking.", 
            tech: ["Blender", "Character Animation", "Rigging"] 
        }
    ]
};

const rightSideCategories = ["WEB DEV", "DESIGN", "VR / AR"];

function openCategory(category) {
    const panel = document.getElementById('project-panel');
    const grid = document.getElementById('project-grid');
    const title = document.getElementById('panel-title');
    
    panel.classList.remove('active', 'from-right', 'from-left', 'theme-orange');

    if (rightSideCategories.includes(category)) {
        panel.classList.add('from-right');
    } else {
        panel.classList.add('from-left');
    }
    
    title.innerText = category;
    
    if (category === "SIDE_OPS") {
        panel.classList.add('theme-orange');
    }

    grid.innerHTML = "";
    const projects = projectData[category] || [];

    projects.forEach(proj => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        
       
        let mediaHTML = '';
        
        if (proj.type === 'video') {
            
            mediaHTML = `
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/${proj.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>`;
        }else if (proj.type === 'local-video') {
           
            mediaHTML = `
                <div class="local-video-container">
                    <video controls muted loop width="100%">
                        <source src="${proj.src}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>`;}
        
        else if (proj.type === 'gallery') {
          
          
            let imagesStr = proj.src.map(imgSource => `<img src="${imgSource}" alt="VR Screenshot">`).join('');
            mediaHTML = `<div class="gallery-container">${imagesStr}</div>`;
        }
        
        
        else {
            const containerClass = proj.layout === 'tall' ? 'img-container tall' : 'img-container';
            mediaHTML = `
                <div class="${containerClass}">
                    <img src="${proj.src}" alt="${proj.title}" onerror="this.src='https://placehold.co/600x400/222/555?text=Missing+Image'">
                </div>`;
        }

       const linkHTML = proj.link 
            ? `<a href="${proj.link}" target="_blank" class="launch-btn">[ LAUNCH_SITE ]</a>` 
            : '';

        card.innerHTML = `
            ${mediaHTML}
            <div style="padding: 15px;">
                <h3 class="card-title">${proj.title}</h3>
                <p class="card-desc">${proj.desc}</p>
                <div class="tech-stack">
                    ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                ${linkHTML} </div>
        `;
        grid.appendChild(card);
    });

    setTimeout(() => {
        panel.classList.add('active');
    }, 10);
}

function closePanel() {
    document.getElementById('project-panel').classList.remove('active');
}


function hackEffect(event) {
    let iteration = 0;
    const card = event.target.closest('.pillar-card');
    if(!card) return;
    const target = card.querySelector('h2');
    const originalText = card.dataset.value;
    clearInterval(target.interval);
    target.interval = setInterval(() => {
        target.innerText = originalText.split("").map((letter, index) => {
            if(index < iteration) return originalText[index];
            return letters[Math.floor(Math.random() * 26)];
        }).join("");
        if(iteration >= originalText.length) clearInterval(target.interval);
        iteration += 1 / 3;
    }, 30);
}

function openProfile() { document.getElementById('profile-modal').classList.add('active'); }
function closeProfile(event) { 
    if (event.target.id === 'profile-modal' || event.target.classList.contains('close-btn')) {
        document.getElementById('profile-modal').classList.remove('active'); 
    } 
}
window.onload = () => {
    const title = document.getElementById('hero-title');
    let iteration = 0;
    const originalText = title.dataset.value;
    const interval = setInterval(() => {
        title.innerText = originalText.split("").map((letter, index) => {
            if(index < iteration) return originalText[index];
            return letters[Math.floor(Math.random() * 26)];
        }).join("");
        if(iteration >= originalText.length) clearInterval(interval);
        iteration += 1 / 3;
    }, 50);
};
