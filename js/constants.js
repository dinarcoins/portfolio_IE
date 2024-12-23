export var SKILLLIST = [
  {
    skillName: "HTMl5",
    level: "good",
    icon: "fa fa-html5",
    image: "image/1.png",
    alt: "1html",
    textDecription:
      "HTMl5 được bản thân tôi ứng dụng khá là chi tiết và đầy đủ, có thể nói tới các thẻ hiện có để support việc chia layout như : Header, Section, Nav, Footer,...",
  },
  {
    skillName: "CSS3",
    level: "good",
    icon: "fa fa-css3",
    image: "image/2.png",
    alt: "2css",
    textDecription:
      "Nắm bắt được 80% các thuộc tính, các sử dụng và cấu trúc của CSS3, ứng dụng tốt vào trong việc style cho website, tạo những hiệu ứng animations tốt, before, after,...",
  },
  {
    skillName: "Javascript",
    level: "medium",
    icon: "fab fa-js-square",
    image: "image/3.png",
    alt: "3js",
    textDecription:
      "Kiến thức cơ bản được bản thân học tập, trau dồi theo từng dự án nhỏ và lớn, tạo được những kết nối giữa DOM, sử dụng các function, array, object cho việc render data ra UI/UX,...",
  },
  {
    skillName: "Support",
    level: "good",
    icon: "fa fa-code",
    image: "image/4.png",
    alt: "4support",
    textDecription:
      "Sử dụng được hầu hết những framework, library, tools, ChatGPT support trong công việc tạo dựng UI,... ",
  },
];

export var HEADER_LIST = [
  {
    icon: "fas fa-phone-alt",
    text: "Liên hệ",
    content: "0876-215-779",
    link: "tel:0876215779",
  },
  {
    icon: "far fa-envelope",
    text: "Email",
    content: "work.nhanhoang",
    link: "mailto:work.nhanhoang@gmail.com",
  },
  {
    icon: "far fa-clock",
    text: "Lịch làm việc",
    content: "Mon. - Fri. 08:30AM - 18PM",
    link: "#",
  },
];

export var MENU_NAV_ITEM = [
  {
    text: "Giới thiệu",
    link: "",
  },
  {
    text: "Bản thân",
    link: "aboutMe",
  },
  {
    text: "Kỹ năng",
    link: "skillSection",
  },
  {
    text: "Thời gian I&E",
    link: "timeline-project",
  },
  {
    text: "Dự án riêng",
    link: "myProject",
  },
  {
    text: "Liên hệ",
    link: "contact-section",
  },
  {
    text: "Thư viện",
    link: "library",
  },
];

export var LIBRARY = [
  { image: "./image/library4.jpg", caption: "Rong Bridge (DAD)" },
  { image: "./image/library1.jpg", caption: "Cung Dinh Hue" },
  { image: "./image/library6.jpg", caption: "Violak Pass (QN)" },
  { image: "./image/library3.jpg", caption: "Quang Binh Quan" },
  { image: "./image/library2.jpg", caption: "Ha Tinh (Provine)" },
  { image: "./image/library5.jpg", caption: "Phong Nha - Ke Bang" },
  { image: "./image/library7.jpg", caption: "Thanh Hoa (Provine)" },
  { image: "./image/library8.jpg", caption: "Vinh Market (NA)" },
  { image: "./image/library9.jpg", caption: "cathedral (HNA)" },
  { image: "./image/library10.jpg", caption: "Giao Thuy (ND)" },
];

export var ABOUTME_LIST_IMAGE = [
  {
    image: "./image/aboutme1.jpg",
    alt: "aboutme1",
  },
  {
    image: "./image/aboutme2.jpg",
    alt: "aboutme2",
  },
  {
    image: "./image/aboutme3.jpg",
    alt: "aboutme3",
  },
  {
    image: "./image/aboutme4.jpg",
    alt: "aboutme4",
  },
  {
    image: "./image/aboutme5.jpg",
    alt: "aboutme5",
  },
  {
    image: "./image/aboutme6.jpg",
    alt: "aboutme6",
  },
];

export var timelineData = [
  {
    date: "09-23-2024",
    title: "Coding Web UI Khoa Tieng Italia",
    content:
      "Xin Chào, mình là Nhân. Hiện tại project này thuộc về quyền quản lý của Công ty I&E Việt Nam. Team size: Only me (Front End Developer). HTML5, CSS3, Javascript, Tailwind. Picker Color Tool, Picker Pixel form Chrome, Font Awesome, ChatGPT, Github pilot, clip-path generator, borderTheme, Trong bài này mình đã sử dụng Lighthouse cuẩ Dev tools để chỉnh sửa 1 số phần của performance. Mọi thẻ image đều có alt, giá trị khác nhau. Sử dụng các thẻ header như h1,h2,h3 để tạo title cho từng section",
    linkGithub: "https://github.com/dinarcoins/I-E-UI",
    linkFTP: "https://nhanht.thuctap.inevn.com/TT00-IE/",
    image: "./image/TT00-bg.png",
  },
  {
    date: "07-10-2024",
    title: "Coding Wev UI TT01 - Portfolio",
    content:
      "Trong web Ui này, nội dung xoay quanh giới thiệu về bản thân Dev và lộ trình đào tạo tại I&E Vietnam yêu quý. Kèm theo đó là thử thách về design khi mà đề bài ra một đề bài mở, dev sẽ phải tự setup",
    linkGithub: "https://github.com/dinarcoins/portfolio_IE",
    linkFTP: "https://nhanht.thuctap.inevn.com/TT01-IE/",
    image: "./image/TT01-bg.png",
  },
  {
    date: "10-14-2024",
    title: "Sudoku Game",
    content:
      "Trong dự án này, Nhân được giao nhiệm vụ code một website game Sudoku bằng Html,Css,Js.Trong thử thách này thật sự là một điều khó và mới lạ đối với Nhân, nhưng bằng sự cố gắng học tập không ngừng thì Nhân đã hoàn thành theo đầy đủ yêu cầu cơ bản, nâng cao mà đã được giao.Hãy thưởng thức phần chơi Sudoku độc lạ của Nhân nhé.Cảm ơn",
    linkGithub: "https://github.com/dinarcoins/miniGame-IE",
    linkFTP: "https://nhanht.thuctap.inevn.com/TT02-IE/",
    image: "./image/TT02-bg.png",
  },
  {
    date: "2024",
    title: "Coding UI TT03 - IEC",
    linkGithub: "https://github.com/dinarcoins/ICE-IE",
    image: "./image/TT03-IEC-bg.png",
    linkFTP: "https://nhanht.thuctap.inevn.com/TT03-IE/IEC",
    content:
      "Nhân được cho phép học tập, tìm hiểu, nghiên cứu thư viên CSS của công ty. Cho phép custom cao và tuỳ biến sâu với nhiều thuộc tính kết hợp với nhau.Hãy cùng xem Nhân đã xử lý như thế nào với những đường link dẫn view, code phía trên nhé",
  },
  {
    date: "2024",
    title: "Coding UI TT03 - APCAL",
    linkGithub: "https://github.com/dinarcoins/APCAL-IE",
    image: "./image/TT03-APCAL-bg.png",
    linkFTP: "https://nhanht.thuctap.inevn.com/TT03-IE/APCAL",

    content:
      "Cùng với IEC, APCAL cũng được sử dụng công nghệ thư viên Css của công ty, dự án này có vẻ được hoàn thiện cao hơn nhưng đó là điều tất yếu của 1 website đúng chuẩn Design, hãy cùng checking và cho Nhân những feedback nhé.",
  },
  {
    date: "10-28-2024",
    title: "Coding TT04 - Using INOVE for render data",
    linkGithub: "https://github.com/dinarcoins/TT04-IE",
    image: "./image/TT03-APCAL-bg.png",
    linkFTP: "https://nhanht.thuctap.inevn.com/TT04-IE/",
    content:
      "Em là Nhân, trong thử thách TT04 này em sẽ được học, tiếp thu kiến thức và làm việc với Inevo, lấy ra dữ liệu cũng như bài viết, thao tác đối với người dùng mà không cần thông qua các công cụ gét data khác. Dưới đây là những link dẫn, file có liên quan tới TT04 này:",
  },
  {
    date: "11-05-2024",
    title: "Coding TT05 - Using INOVE for create VietNam History Website",
    linkGithub: "https://github.com/dinarcoins/historyVietnam",
    linkFTP: "https://nhanht.thuctap.inevn.com/TT05-IE/",
    image: "./image/TT05-bg.png",
    content:
      "Có thể nói Lịch Sử Việt Nam là 1 trong những lĩnh vực kiến thức rất rộng, vì có nhiều mốc thời gian, sự kiện lịch sử và chiều dài văn hoá từ rất lâu.Trong thử thách này em Nhân sẽ chia nhỏ các mốc thời gian quan trong theo từng thời đại, sự kiện, nhân vật trong thời kỳ đó.Cùng xem là nội dung và UI của website này nhé, em Nhân xin cảm ơn.",
  },
  {
    date: "11-18-2024",
    title: "Coding TT06 - Admin panel INEVO",
    linkGithub: "https://github.com/dinarcoins/TT06-IE",
    image: "./image/TT06-bg.png",
    linkFTP: "https://nhanht.thuctap.inevn.com/TT06-IE/",
    content:
      "Trong thử thách này, em Nhân được tiếp xúc với Bảng Quản Trị từ INOVE, tạo giao diện và tìm hiểu, học hiểu cấu trúc cũng như trải nghiệm hướng sử dụng của người dùng đối với BQT từ INEVO",
  },
];

export var MY_PROJECT = [
  { text: "DF Landing Page", image: "./image/project1.png", alt: "project1" },
  { text: "Portfolio Page", image: "./image/project2.png", alt: "project2" },
  { text: "Travel Page", image: "./image/project3.png", alt: "project3" },
  { text: "Add job function", image: "./image/project4.png", alt: "project4" },
  {
    text: "Titan Landing page",
    image: "./image/project5.png",
    alt: "project5",
  },
  { text: "Payment Michi", image: "./image/project6.png", alt: "project6" },
  { text: "Plane UI", image: "./image/project7.png", alt: "project7" },
  { text: "Happy Car Web", image: "./image/project8.png", alt: "project8" },
];

export var CONTACT_DATA = [
  {
    text: "Ha Noi",
    href: "https://www.google.com/maps",
    icon: "las la-map-marker-alt",
    target: "_blank",
  },
  {
    text: "0876-215-779",
    href: "tel:0876215779",
    icon: "las la-phone-volume",
  },
  {
    text: "work.nhanhoang",
    href: "mailto:work.nhanhoang@gmail.com",
    icon: "lar la-envelope",
  },
];
