const app = Vue.createApp({

  data() {
    return {
      links: [
        { iconClass: 'fa fa-cogs fa-lg', title: 'Skills', id: 1 },
        { iconClass: 'fa fa-tasks fa-lg', title: 'Projects', id: 2 },
        { iconClass: 'fa fa-briefcase fa-lg', title: 'Jobs', id: 3 },
        { iconClass: 'fa fa-graduation-cap fa-lg', title: 'Education', id: 4 },
        // { iconClass: 'fa fa-envelope fa-lg', title: 'Contact', id: 5 },
      ],
      linkTitle: 'Skills',

      skills: [
        {
          cardImage: './images/frontend-pic.jpg',
          cardHeader: 'Frontend Development',
          contentList: [
            { cardContent: 'Reactjs, Redux, Thunk, CSS, SASS, Bootstrap, MaterialCSS, jQuery, Vuejs.' },
          ], id: 1
        },
        {
          cardImage: './images/backend-pic.jpg',
          cardHeader: 'Backend Development',
          contentList: [
            { cardContent: 'JavaScript: NodeJS, Jest, Express, EJS, Express-GraphQL, Apollo Server/Client.' },
            { cardContent: 'Java: Spring Boot, WebFlux, Microservices, Kafka, JUnit, Mockito.' },
            { cardContent: '.Net: ASP.Net Core, Web API, WPF.' },
            { cardContent: 'Python: Flask, Django, DRF.' },
            { cardContent: 'Cloud: AWS Lambda, Alexa Console.' },
          ], id: 2
        },
        {
          cardImage: './images/devops-pic.jpg',
          cardHeader: 'DevOps',
          contentList: [
            { cardContent: 'Linux, Docker, Kubernetes, Nginx, Jenkins, Git.' },
          ], id: 3
        },
        {
          cardImage: './images/otherprog-pic.jpg',
          cardHeader: 'Others',
          contentList: [
            { cardContent: 'Adobe Classical Campaign, AEP.' },
            { cardContent: 'Android app development.' },
            { cardContent: 'PostgreSQL, MySQL, SQL Server, MongoDB, Cassandra.' },
            { cardContent: 'Pandas, Matplotlib.' },
            { cardContent: 'JavaScript, Java, C#, Python, C++, C.' },
          ], id: 4
        },
      ],

      projects: [
        {
          cardImage: './images/instalike-pic.jpg',
          cardHeader: 'Insta-like Posting API',
          cardSubHeader: '- Apollo Server, Client, GraphQL, Nodejs, JWT, Reactjs, MongoDB.',
          contentList: [
            { cardContent: 'A GraphQL system that improved the performance of the API, creating a Instagram like posting system where users can message, comment and like on the post.' },
          ], id: 1
        },
        {
          cardImage: './images/projectBoard-pic.jpg',
          cardHeader: 'Project Board',
          cardSubHeader: '- React, Redux, Thunk, Nodejs, Express, MySQL.',
          contentList: [
            { cardContent: 'Consists of a dashboard and a notification system, for the new activity, when a new user joined the system, or new project is made. Data CRUD behaviour with backend is displayed in a sleek designed user interface.' },
          ], id: 2
        },
        {
          cardImage: './images/blogSite-pic.jpg',
          cardHeader: 'Blog site',
          cardSubHeader: '- Nodejs, Express, EJS, MongoDB.',
          contentList: [
            { cardContent: 'The project is a blogging website, where user can post their blogs. These will then be presented to the public when the site is first opened. Blogs can be updated and deleted also.' },
          ], id: 3
        },
        {
          cardImage: './images/ispSubscription-pic.jpg',
          cardHeader: 'ISP Subscription System',
          cardSubHeader: '- Java, MySQL, Swing.',
          contentList: [
            { cardContent: 'It is a dynamically acknowledging subscription system built with priority in analysis of client feedback, making it easier to decide the type of service the new client will be using.' },
          ], id: 4
        },
        {
          cardImage: './images/kioskSystem-pic.jpg',
          cardHeader: 'Kiosk System',
          cardSubHeader: '- Python, Django, PostgreSQL.',
          contentList: [
            { cardContent: 'Developed a kiosk database app for Inventory and Cashier system. Items, properties, and Suppliers data on Inventory; and total number of items sold wrt the Cashier information on these system respectively.' },
          ], id: 5
        },
        {
          cardImage: './images/boligProspektet-pic.jpg',
          cardHeader: 'Boligprospektet',
          cardSubHeader: '- C#, ASP.Net Core, Entity Framework, Razor Pages, ScrapySharp, HTMLAgilityPack.',
          contentList: [
            { cardContent: 'Data scrapping is the main objective of this project, which is an attempt to make the life easier for searching rental apartments in Denmark.' },
          ], id: 6
        },
        {
          cardImage: './images/parcelDelivery-pic.jpg',
          cardHeader: 'Parcel Delivery System',
          cardSubHeader: '- Java, Android, SQLite.',
          contentList: [
            { cardContent: 'This project is a system to approve if the item delivery was a success or not, and in addition the purpose of the visit to the customer was recorded and displayed as a report.' },
          ], id: 7
        },
        {
          cardImage: './images/scaffoldingDotNet-pic.jpg',
          cardHeader: 'Scaffolding - fast and with ease for ASP.Net Core 3.0',
          cardSubHeader: '- Shell Scripting and Repository Pattern.',
          contentList: [
            { cardContent: 'Makes a fully functioning raw CRUD application project for ASP.Net Core 3.0 very fast and easily in a matter of moment, inputting table attributes and its related data-types only.' },
          ], id: 8
        },
        {
          cardImage: './images/healthInfoSystem-pic.jpg',
          cardHeader: 'Health Information System',
          cardSubHeader: '- C#, ASP.Net Web Forms, MS SQL Server.',
          contentList: [
            { cardContent: 'Mainly for data analysis and visualization. Built to add, analyze and access the disease data of the government health system of Nepal on gender, age and location by the respective members and the general public.' },
          ], id: 9
        },
        {
          cardImage: './images/foosball-pic.jpg',
          cardHeader: 'Virtual Foosball',
          cardSubHeader: '- MS Visual C++, OpenGL.',
          contentList: [
            { cardContent: 'It dealt with the simulation of the rods, men and ball, by the movement of the real rod with the help of the light of optical mouse, thus showed an immersion of playing a real foosball.' },
          ], id: 10
        },
        {
          cardImage: './images/marble-pic.jpg',
          cardHeader: 'Simulation of finger motion in the marble game',
          cardSubHeader: '- C, 555 timer.',
          contentList: [
            { cardContent: 'It was a hybrid of simulation and interfacing project that gave the impression of playing the game of marble using a real human finger on the computer. Interfacing was done on parallel port transmission for data feed.' },
          ], id: 11
        },
        {
          cardImage: './images/bookMgmtSystem-pic.jpg',
          cardHeader: 'Book Management System',
          cardSubHeader: '- VB.Net, MS SQL Server.',
          contentList: [
            { cardContent: 'This was mainly a database software project, built to make it easy for the librarian to add books entered, delete the old entry, edit the earlier book record and print the details.' },
          ], id: 12
        },
      ],

      jobs: [
        {
          cardImage: './images/wunderman-pic.jpg',
          cardHeader: 'Associate Developer, 2021 - Present',
          cardSubHeader: 'Wunderman Thompson, Copenhagen, Denmark',
          contentList: [
            { cardContent: '- JavaScript, Adobe Classical Campaign, SQL, AWS Lambda, Node.js, Alexa Console, AEP, XML, Mustache, C#.Net, Bitbucket.'},
            { cardContent: 'Developing, configuring, maintaining, testing and monitoring in ACC; REST API on AWS Alexa Console with AEP; Maintaining .Net Code to back up Adobe log' },
          ], id: 1
        },
        {
          cardImage: './images/wired-pic.jpg',
          cardHeader: 'Fullstack Developer, 2020',
          cardSubHeader: 'Wired Relations, Copenhagen, Denmark',
          contentList: [
            { cardContent: '- JavaScript, Nodejs, React, Java, Spring Boot, Kafka, JUnit, Mockito, Usergrid, Jenkins, Docker, Git.' },
            { cardContent: 'Designing, Refactoring, Testing, Making the api implement CQRS architecture' },
          ], id: 2
        },
        {
          cardImage: './images/freelancer-pic.jpg',
          cardHeader: 'Freelancer, 2017 - 2019',
          cardSubHeader: 'Copenhagen, Kathmandu',
          contentList: [
            { cardContent: '- ASP.Net Core, Python, Android.' },
            { cardContent: 'Website development, Data Visualization, Mobile app development' },

          ], id: 3
        },
        {
          cardImage: './images/yantra-pic.jpg',
          cardHeader: 'Junior Engineer, 2013, 2014',
          cardSubHeader: 'Yantra Solution Pvt. Ltd., Kathmandu, Nepal',
          contentList: [
            { cardContent: '- Java, C#, ASP.Net, PHP.' },
            { cardContent: 'Web- and desktop- database application development' },
          ], id: 4
        },
        {
          cardImage: './images/deerwalk-pic.jpg',
          cardHeader: 'Associate Software Engineer, 2015',
          cardSubHeader: 'Deerwalk Inc., Siphal, Kathmandu, Nepal',
          contentList: [
            { cardContent: '- Hadoop, Python, Amazon web server.' },
            { cardContent: 'Big Data processing, monitoring and storing in secure place, working in production environment' },
          ], id: 5
        },
        {
          cardImage: './images/iims-pic.jpg',
          cardHeader: 'Lecturer, Bachelor level, IT Department, 2016',
          cardSubHeader: 'International Institute of Management Science, Dhobidhara, Kathmandu, Nepal',
          contentList: [
            { cardContent: '- DBMS, Software Project Management, Enterprise Resource Planning.' },
          ], id: 6
        },
        {
          cardImage: './images/iid-pic.jpg',
          cardHeader: 'Associate System Administrator, 2012',
          cardSubHeader: 'Institute of Information Development, Kathmandu, Nepal',
          contentList: [
            { cardContent: '- Red Hat Linux.' },
            { cardContent: 'Administration and Server Configuration' },
          ], id: 7
        },
      ],

      educations: [
        {
          cardImage: './images/master-pic.jpg',
          cardHeader: 'Master of Science in Information Technology, 2015',
          cardSubHeader: 'Sikkim Manipal University, India',
          contentList: [
            { cardContent: 'Percentage: 78% (Semester scholarships) ' },
            { cardContent: '- Data structure and algorithms, Operating System, DBMS, Cloud Computing, Computer Networking.' },
            { cardContent: 'Projects: "ISP Subscription System" in Java. "Health Information System" in ASP.Net.' },
          ], id: 1
        },
        {
          cardImage: './images/bachelor-pic.jpg',
          cardHeader: 'Bachelor in Computer Engineering',
          cardSubHeader: 'Pokhara University, Nepal',
          contentList: [
            { cardContent: '- Simulation and Modeling, Compiler Designing.' },
            { cardContent: 'Projects: "Virtual Foosball" in C++, OpenGL. "Marble game simulation and design" in C, 555 timer.' },
          ], id: 1
        },
      ],

      // For pagination
      startItem: 1,
      currentLastItem: 3,
      displayFrom: 0,
      displayUntil: 0,
      lastItem: 0,
      currentItem: '',

      // Tags for sphere
      myTags: [
        'JavaScript', 'NodeJS', 'Express', 'EJS', 'GraphQL',
        'ReactJS', 'Hooks', 'Redux', 'Thunk', 'Apollo-Client', 'VueJS',
        'Java', 'Spring Boot', 'WebFlux', 'Kafka', 'Microservices', 'JUnit', 'Mockito', 'Android App', 'Swift',
        'C#', 'WPF', 'Web Form', 'ASP.Net Core', 'Web API', 'MSSQL',
        'Python', 'Flask', 'Django', 'DRF', 'Pandas', 'Matplotlib', 'Matlab',
        'C++', 'C', 'PHP',
        'HTML', 'CSS', 'SASS', 'Bootstrap', 'MaterialCSS', 'AJAX', 'jQuery',
        'Linux', 'Docker', 'Kubernetes', 'Nginx', 'Jenkins',
        'Cassandra', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'
      ],
      sphereHide: true,
    }
  },


  methods: {

    // Contact form submission
    submitForm(ev) {
      ev.preventDefault();

      var message_sent = document.getElementById('message_sent')
      var message_error = document.getElementById('message_error')

      // disable button
      this.disableContactButton()

      var data = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      }

      fetch('https://formspree.io/f/mqkgnldw', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then((res) => {
          if (res.status === 200) {
            // Show toast message for 5 second
            message_sent.style.visibility = 'visible'
            setTimeout(() => {
              message_sent.style.visibility = 'hidden'
            }, 5000);

            console.log('Thanks!', res)
          } else {
            // message_error.innerHTML = "Oops! There was a problem.";

            // Show toast message for 5 second
            message_error.style.visibility = 'visible'
            setTimeout(() => {
              message_error.style.visibility = 'hidden'
            }, 5000);

            console.log('Oops! There was a problem.')
          }

          // enable button
          this.enableContactButton()

          //reset all values of the form
          this.$refs.contactForm.reset()
          // this.resetForm()
        })
        .catch((err) => {
          message_error.innerHTML = "Oops! There was a problem.";
          console.log(err)

          // enable button
          this.enableContactButton()

        })

    },

    // Disable contact button
    disableContactButton() {
      var contact_submit = document.getElementById('contact_submit')
      var contact_send_icon = document.getElementById('contact_send_icon')
      var contact_send_text = document.getElementById('contact_send_text')

      // disable button
      contact_submit.disabled = true

      contact_submit.style.background = "linear-gradient(to right bottom, \
        var(--button-gradient-right-color), \
        var(--button-gradient-bottom-color) \
      )";
      contact_send_icon.style.color = "#535252"
      contact_send_text.style.color = "#535252"
    },

    // Enable contact button
    enableContactButton() {
      // enable button
      contact_submit.disabled = false

      contact_submit.addEventListener("mouseover", mouseOver)
      contact_submit.addEventListener("mouseout", mouseOut)

      function mouseOver() {
        contact_submit.style.background = "linear-gradient(to right bottom, \
          var(--card-gradient-right-color), \
          var(--card-gradient-bottom-color) \
        )";
        contact_send_icon.style.color = "black"
        contact_send_text.style.color = "black"
      }

      function mouseOut() {
        contact_submit.style.background = "linear-gradient(to right bottom, \
          var(--button-gradient-right-color), \
          var(--button-gradient-bottom-color) \
        )";
        contact_send_icon.style.color = "#535252"
        contact_send_text.style.color = "#535252"
      }
    },


    // For pagination
    moreItems() {

      // Reset lastItem, checking which category it is
      if (this.linkTitle === 'Projects') {
        this.lastItem = this.projects.length
      }
      else if (this.linkTitle === 'Jobs') {
        this.lastItem = this.jobs.length
      }

      // Increase pagination, if not last item
      if (this.currentLastItem !== this.lastItem) {
        this.displayFrom = this.startItem++
        this.displayUntil = this.currentLastItem++
        this.filteredProjects
      }
    },

    // For pagination
    backItems() {

      // Decrease pagination, if not just started
      if (this.displayFrom !== 1) {
        this.displayFrom = this.startItem--
        this.displayUntil = this.currentLastItem--
        this.filteredProjects
      }
    },

    // Making a sphere in the id 'keywords'    
    sphere() {

      this.sphereHide = false
      // var keywords = document.getElementById('keywords')
      // TagCloud(keywords, this.myTags)

      // With more options
      var keywords = document.getElementById('keywords')
      TagCloud(keywords, this.myTags, {

        // radius in px
        // radius: 100,
        radius: 170,

        // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',

        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,

        // interact with cursor move on mouse out
        keep: true

      })
    },

    // Clear all form content at first
    resetForm() {
      var contact_name = document.getElementById('contact_name')
      var contact_email = document.getElementById('contact_email')
      var contact_subject = document.getElementById('contact_subject')
      var contact_message = document.getElementById('contact_message')

      
      contact_name.setAttribute('value', '')
      contact_email.setAttribute('value', '')
      contact_subject.setAttribute('value', '')
      contact_message.setAttribute('value', '')

      const form = document.getElementById('contactFormId')
      form.reset()
    }
  },


  computed: {

    // For pagination
    filteredItems() {

      // Resetting variables if it is not from same category
      if (this.currentItem !== this.linkTitle) {
        this.startItem = 1
        this.currentLastItem = 3
      }

      // If it is 'Projects' category, send selected projects
      if (this.linkTitle === 'Projects') {
        this.currentItem = 'Projects'

        this.displayFrom = this.startItem
        this.displayUntil = this.currentLastItem

        var projectToReturn = this.projects.filter(
          (project) => project.id >= this.displayFrom && project.id <= this.displayUntil
        )
        return projectToReturn
      }

      // If it is 'Jobs' category, send selected jobs
      else if (this.linkTitle === 'Jobs') {
        this.currentItem = 'Jobs'

        this.displayFrom = this.startItem
        this.displayUntil = this.currentLastItem

        var jobToReturn = this.jobs.filter(
          (job) => job.id >= this.displayFrom && job.id <= this.displayUntil
        )
        return jobToReturn
      }

    }
  }

})

app.mount('#app')
