// School Title Headings
var heading0 = document.getElementById("heading0");
var heading1 = document.getElementById("heading1");
var heading2 = document.getElementById("heading2");
var heading17 = document.getElementById("heading17");

// Data in cards
var card0 = document.getElementById("list0");
var card1 = document.getElementById("list1");
var card2 = document.getElementById("list2");
var card17 = document.getElementById("list17");

// Work Title Headings
var heading3 = document.getElementById("heading3");
var heading4 = document.getElementById("heading4");
var heading5 = document.getElementById("heading5");
var heading6 = document.getElementById("heading6");
var heading7 = document.getElementById("heading7");
var heading8 = document.getElementById("heading8");
var heading9 = document.getElementById("heading9");
var heading10 = document.getElementById("heading10");
var heading11 = document.getElementById("heading11");
var heading12 = document.getElementById("heading12");
var heading13 = document.getElementById("heading13");
var heading14 = document.getElementById("heading14");
var heading15 = document.getElementById("heading15");
var heading16 = document.getElementById("heading16");
var heading18 = document.getElementById("heading18");
var heading19 = document.getElementById("heading19");
var heading20 = document.getElementById("heading20");
var heading21 = document.getElementById("heading21");

// Data in cards
var card3 = document.getElementById("list3");
var card4 = document.getElementById("list4");
var card5 = document.getElementById("list5");
var card6 = document.getElementById("list6");
var card7 = document.getElementById("list7");
var card8 = document.getElementById("list8");
var card9 = document.getElementById("list9");
var card10 = document.getElementById("list10");
var card11 = document.getElementById("list11");
var card12 = document.getElementById("list12");
var card13 = document.getElementById("list13");
var card14 = document.getElementById("list14");
var card15 = document.getElementById("list15");
var card16 = document.getElementById("list16");
var card18 = document.getElementById("list18");
var card19 = document.getElementById("list19");
var card20 = document.getElementById("list20");
var card21 = document.getElementById("list21");


function resumeCards() {
    for (var i = 0; i < resume.length; i++) {
    // Education Cards
        // Card 17
        // School Name
        var school17 = document.createElement("h5");
        school17.className = "card-title";
        var title17 = resume[17].school;
        school17.innerHTML=title17;
        heading17.appendChild(school17);

        // Degree
        var ul17 = document.createElement("ul");
        ul17.className = "list-group list-group-flush";
        var li17 = document.createElement("li");
        li17.className = "list-group-item"
        var text17 = "Degree: " + resume[17].degree;
        li17.innerHTML=text17;
        card17.appendChild(li17);
        
        // Graduation Date
        var ul17 = document.createElement("ul");
        ul17.className = "list-group list-group-flush";
        var li17 = document.createElement("li");
        li17.className = "list-group-item"
        var text17 = "Graduated: " + resume[17].graduated;
        li17.innerHTML=text17;
        card17.appendChild(li17);
        
        // City
        var ul17 = document.createElement("ul");
        ul17.className = "list-group list-group-flush";
        var li17 = document.createElement("li");
        li17.className = "list-group-item"
        var text17 = "City: " + resume[17].city;
        li17.innerHTML=text17;
        card17.appendChild(li17);
    
        // Card 0 
        // School Name
        var school0 = document.createElement("h5");
        school0.className = "card-title";
        var title0 = resume[0].school;
        school0.innerHTML=title0;
        heading0.appendChild(school0);

        // Degree
        var ul0 = document.createElement("ul");
        ul0.className = "list-group list-group-flush";
        var li0 = document.createElement("li");
        li0.className = "list-group-item"
        var text0 = "Degree: " + resume[0].degree;
        li0.innerHTML=text0;
        card0.appendChild(li0);
        
        // Grad Date
        var ul0 = document.createElement("ul");
        ul0.className = "list-group list-group-flush";
        var li0 = document.createElement("li");
        li0.className = "list-group-item"
        var text0 = "Graduated: " + resume[0].graduated;
        li0.innerHTML=text0;
        card0.appendChild(li0);
        
        // City
        var ul0 = document.createElement("ul");
        ul0.className = "list-group list-group-flush";
        var li0 = document.createElement("li");
        li0.className = "list-group-item"
        var text0 = "City: " + resume[0].city;
        li0.innerHTML=text0;
        card0.appendChild(li0);


        // Card 1
        // School Name
        var school1 = document.createElement("h5");
        school1.className = "card-title";
        var title1 = resume[1].school;
        school1.innerHTML=title1;
        heading1.appendChild(school1);

        // Degree
        var ul1 = document.createElement("ul");
        ul1.className = "list-group list-group-flush";
        var li1 = document.createElement("li");
        li1.className = "list-group-item"
        var text1 = "Degree: " + resume[1].degree;
        li1.innerHTML=text1;
        card1.appendChild(li1);
        
        // Graduation Date
        var ul1 = document.createElement("ul");
        ul1.className = "list-group list-group-flush";
        var li1 = document.createElement("li");
        li1.className = "list-group-item"
        var text1 = "Graduated: " + resume[1].graduated;
        li1.innerHTML=text1;
        card1.appendChild(li1);
        
        // City
        var ul1 = document.createElement("ul");
        ul1.className = "list-group list-group-flush";
        var li1 = document.createElement("li");
        li1.className = "list-group-item"
        var text1 = "City: " + resume[1].city;
        li1.innerHTML=text1;
        card1.appendChild(li1);


        // // Card 2
        // School Name
        var school2 = document.createElement("h5");
        school2.className = "card-title";
        var title2 = resume[2].school;
        school2.innerHTML=title2;
        heading2.appendChild(school2);

        // Degree
        var ul2 = document.createElement("ul");
        ul2.className = "list-group list-group-flush";
        var li2 = document.createElement("li");
        li2.className = "list-group-item"
        var text2 = "Degree: " + resume[2].degree;
        li2.innerHTML=text2;
        card2.appendChild(li2);
        
        // Graduation Date
        var ul2 = document.createElement("ul");
        ul2.className = "list-group list-group-flush";
        var li2 = document.createElement("li");
        li2.className = "list-group-item"
        var text2 = "Graduated: " + resume[2].graduated;
        li2.innerHTML=text2;
        card2.appendChild(li2);
        
        // City
        var ul2 = document.createElement("ul");
        ul2.className = "list-group list-group-flush";
        var li2 = document.createElement("li");
        li2.className = "list-group-item"
        var text2 = "City: " + resume[2].city;
        li2.innerHTML=text2;
        card2.appendChild(li2);
    
    // Work Cards
        // Card 3 
        // Work Name
        var work3 = document.createElement("h5");
        work3.className = "card-title";
        var title3 = resume[3].work;
        work3.innerHTML=title3;
        heading3.appendChild(work3);
        
        // Title
        var ul3 = document.createElement("ul");
        ul3.className = "list-group list-group-flush";
        var li3 = document.createElement("li");
        li3.className = "list-group-item"
        var text3 = resume[3].title;
        li3.innerHTML=text3;
        card3.appendChild(li3);

        // Dates
        var ul3 = document.createElement("ul");
        ul3.className = "list-group list-group-flush";
        var li3 = document.createElement("li");
        li3.className = "list-group-item"
        var text3 = resume[3].dates;
        li3.innerHTML=text3;
        card3.appendChild(li3);
        
        // City
        var ul3 = document.createElement("ul");
        ul3.className = "list-group list-group-flush";
        var li3 = document.createElement("li");
        li3.className = "list-group-item"
        var text3 = resume[3].city;
        li3.innerHTML=text3;
        card3.appendChild(li3);

        // Description
        var ul3 = document.createElement("ul");
        ul3.className = "list-group list-group-flush";
        var li3 = document.createElement("li");
        li3.className = "list-group-item"
        var text3 = resume[3].description;
        li3.innerHTML=text3;
        card3.appendChild(li3);


        // Card 4
        // Work Name
        var work4 = document.createElement("h5");
        work4.className = "card-title";
        var title4 = resume[4].work;
        work4.innerHTML=title4;
        heading4.appendChild(work4);
        
        // Title
        var ul4 = document.createElement("ul");
        ul4.className = "list-group list-group-flush";
        var li4 = document.createElement("li");
        li4.className = "list-group-item"
        var text4 = resume[4].title;
        li4.innerHTML=text4;
        card4.appendChild(li4);

        // Dates
        var ul4 = document.createElement("ul");
        ul4.className = "list-group list-group-flush";
        var li4 = document.createElement("li");
        li4.className = "list-group-item"
        var text4 = resume[4].dates;
        li4.innerHTML=text4;
        card4.appendChild(li4);
        
        // City
        var ul4 = document.createElement("ul");
        ul4.className = "list-group list-group-flush";
        var li4 = document.createElement("li");
        li4.className = "list-group-item"
        var text4 = resume[4].city;
        li4.innerHTML=text4;
        card4.appendChild(li4);

        // Description
        var ul4 = document.createElement("ul");
        ul4.className = "list-group list-group-flush";
        var li4 = document.createElement("li");
        li4.className = "list-group-item"
        var text4 = resume[4].description;
        li4.innerHTML=text4;
        card4.appendChild(li4);


        // Card 5
        // Work Name
        var work5 = document.createElement("h5");
        work5.className = "card-title";
        var title5 = resume[5].work;
        work5.innerHTML=title5;
        heading5.appendChild(work5);
        
        // Title
        var ul5 = document.createElement("ul");
        ul5.className = "list-group list-group-flush";
        var li5 = document.createElement("li");
        li5.className = "list-group-item"
        var text5 = resume[5].title;
        li5.innerHTML=text5;
        card5.appendChild(li5);

        // Dates
        var ul5 = document.createElement("ul");
        ul5.className = "list-group list-group-flush";
        var li5 = document.createElement("li");
        li5.className = "list-group-item"
        var text5 = resume[5].dates;
        li5.innerHTML=text5;
        card5.appendChild(li5);
        
        // City
        var ul5 = document.createElement("ul");
        ul5.className = "list-group list-group-flush";
        var li5 = document.createElement("li");
        li5.className = "list-group-item"
        var text5 = resume[5].city;
        li5.innerHTML=text5;
        card5.appendChild(li5);

        // Description
        var ul5 = document.createElement("ul");
        ul5.className = "list-group list-group-flush";
        var li5 = document.createElement("li");
        li5.className = "list-group-item"
        var text5 = resume[5].description;
        li5.innerHTML=text5;
        card5.appendChild(li5);


        // Card 6
        // Work Name
        var work6 = document.createElement("h5");
        work6.className = "card-title";
        var title6 = resume[6].work;
        work6.innerHTML=title6;
        heading6.appendChild(work6);
        
        // Title
        var ul6 = document.createElement("ul");
        ul6.className = "list-group list-group-flush";
        var li6 = document.createElement("li");
        li6.className = "list-group-item"
        var text6 = resume[6].title;
        li6.innerHTML=text6;
        card6.appendChild(li6);

        // Dates
        var ul6 = document.createElement("ul");
        ul6.className = "list-group list-group-flush";
        var li6 = document.createElement("li");
        li6.className = "list-group-item"
        var text6 = resume[6].dates;
        li6.innerHTML=text6;
        card6.appendChild(li6);
        
        // City
        var ul6 = document.createElement("ul");
        ul6.className = "list-group list-group-flush";
        var li6 = document.createElement("li");
        li6.className = "list-group-item"
        var text6 = resume[6].city;
        li6.innerHTML=text6;
        card6.appendChild(li6);

        // Description
        var ul6 = document.createElement("ul");
        ul6.className = "list-group list-group-flush";
        var li6 = document.createElement("li");
        li6.className = "list-group-item"
        var text6 = resume[6].description;
        li6.innerHTML=text6;
        card6.appendChild(li6);


        // Card 7
        // Work Name
        var work7 = document.createElement("h5");
        work7.className = "card-title";
        var title7 = resume[7].work;
        work7.innerHTML=title7;
        heading7.appendChild(work7);
        
        // Title
        var ul7 = document.createElement("ul");
        ul7.className = "list-group list-group-flush";
        var li7 = document.createElement("li");
        li7.className = "list-group-item"
        var text7 = resume[7].title;
        li7.innerHTML=text7;
        card7.appendChild(li7);

        // Dates
        var ul7 = document.createElement("ul");
        ul7.className = "list-group list-group-flush";
        var li7 = document.createElement("li");
        li7.className = "list-group-item"
        var text7 = resume[7].dates;
        li7.innerHTML=text7;
        card7.appendChild(li7);
        
        // City
        var ul7 = document.createElement("ul");
        ul7.className = "list-group list-group-flush";
        var li7 = document.createElement("li");
        li7.className = "list-group-item"
        var text7 = resume[7].city;
        li7.innerHTML=text7;
        card7.appendChild(li7);

        // Description
        var ul7 = document.createElement("ul");
        ul7.className = "list-group list-group-flush";
        var li7 = document.createElement("li");
        li7.className = "list-group-item"
        var text7 = resume[7].description;
        li7.innerHTML=text7;
        card7.appendChild(li7);


        // Card 8
        // Work Name
        var work8 = document.createElement("h5");
        work8.className = "card-title";
        var title8 = resume[8].work;
        work8.innerHTML=title8;
        heading8.appendChild(work8);
        
        // Title
        var ul8 = document.createElement("ul");
        ul8.className = "list-group list-group-flush";
        var li8 = document.createElement("li");
        li8.className = "list-group-item"
        var text8 = resume[8].title;
        li8.innerHTML=text8;
        card8.appendChild(li8);

        // Dates
        var ul8 = document.createElement("ul");
        ul8.className = "list-group list-group-flush";
        var li8 = document.createElement("li");
        li8.className = "list-group-item"
        var text8 = resume[8].dates;
        li8.innerHTML=text8;
        card8.appendChild(li8);
        
        // City
        var ul8 = document.createElement("ul");
        ul8.className = "list-group list-group-flush";
        var li8 = document.createElement("li");
        li8.className = "list-group-item"
        var text8 = resume[8].city;
        li8.innerHTML=text8;
        card8.appendChild(li8);

        // Description
        var ul8 = document.createElement("ul");
        ul8.className = "list-group list-group-flush";
        var li8 = document.createElement("li");
        li8.className = "list-group-item"
        var text8 = resume[8].description;
        li8.innerHTML=text8;
        card8.appendChild(li8);


        // Card 9
        // Work Name
        var work9 = document.createElement("h5");
        work9.className = "card-title";
        var title9 = resume[9].work;
        work9.innerHTML=title9;
        heading9.appendChild(work9);
        
        // Title
        var ul9 = document.createElement("ul");
        ul9.className = "list-group list-group-flush";
        var li9 = document.createElement("li");
        li9.className = "list-group-item"
        var text9 = resume[9].title;
        li9.innerHTML=text9;
        card9.appendChild(li9);

        // Dates
        var ul9 = document.createElement("ul");
        ul9.className = "list-group list-group-flush";
        var li9 = document.createElement("li");
        li9.className = "list-group-item"
        var text9 = resume[9].dates;
        li9.innerHTML=text9;
        card9.appendChild(li9);
        
        // City
        var ul9 = document.createElement("ul");
        ul9.className = "list-group list-group-flush";
        var li9 = document.createElement("li");
        li9.className = "list-group-item"
        var text9 = resume[9].city;
        li9.innerHTML=text9;
        card9.appendChild(li9);

        // Description
        var ul9 = document.createElement("ul");
        ul9.className = "list-group list-group-flush";
        var li9 = document.createElement("li");
        li9.className = "list-group-item"
        var text9 = resume[9].description;
        li9.innerHTML=text9;
        card9.appendChild(li9);

        // Card 10
        // Work Name
        var work10 = document.createElement("h5");
        work10.className = "card-title";
        var title10 = resume[10].work;
        work10.innerHTML=title10;
        heading10.appendChild(work10);
        
        // Title
        var ul10 = document.createElement("ul");
        ul10.className = "list-group list-group-flush";
        var li10 = document.createElement("li");
        li10.className = "list-group-item"
        var text10 = resume[10].title;
        li10.innerHTML=text10;
        card10.appendChild(li10);

        // Dates
        var ul10 = document.createElement("ul");
        ul10.className = "list-group list-group-flush";
        var li10 = document.createElement("li");
        li10.className = "list-group-item"
        var text10 = resume[10].dates;
        li10.innerHTML=text10;
        card10.appendChild(li10);
        
        // City
        var ul10 = document.createElement("ul");
        ul10.className = "list-group list-group-flush";
        var li10 = document.createElement("li");
        li10.className = "list-group-item"
        var text10 = resume[10].city;
        li10.innerHTML=text10;
        card10.appendChild(li10);

        // Description
        var ul10 = document.createElement("ul");
        ul10.className = "list-group list-group-flush";
        var li10 = document.createElement("li");
        li10.className = "list-group-item"
        var text10 = resume[10].description;
        li10.innerHTML=text10;
        card10.appendChild(li10);


        // Card 11
        // Work Name
        var work11 = document.createElement("h5");
        work11.className = "card-title";
        var title11 = resume[11].work;
        work11.innerHTML=title11;
        heading11.appendChild(work11);
        
        // Title
        var ul11 = document.createElement("ul");
        ul11.className = "list-group list-group-flush";
        var li11 = document.createElement("li");
        li11.className = "list-group-item"
        var text11 = resume[11].title;
        li11.innerHTML=text11;
        card11.appendChild(li11);

        // Dates
        var ul11 = document.createElement("ul");
        ul11.className = "list-group list-group-flush";
        var li11 = document.createElement("li");
        li11.className = "list-group-item"
        var text11 = resume[11].dates;
        li11.innerHTML=text11;
        card11.appendChild(li11);
        
        // City
        var ul11 = document.createElement("ul");
        ul11.className = "list-group list-group-flush";
        var li11 = document.createElement("li");
        li11.className = "list-group-item"
        var text11 = resume[11].city;
        li11.innerHTML=text11;
        card11.appendChild(li11);

        // Description
        var ul11 = document.createElement("ul");
        ul11.className = "list-group list-group-flush";
        var li11 = document.createElement("li");
        li11.className = "list-group-item"
        var text11 = resume[11].description;
        li11.innerHTML=text11;
        card11.appendChild(li11);

        // Card 12
        // Work Name
        var work12 = document.createElement("h5");
        work12.className = "card-title";
        var title12 = resume[12].work;
        work12.innerHTML=title12;
        heading12.appendChild(work12);
        
        // Title
        var ul12 = document.createElement("ul");
        ul12.className = "list-group list-group-flush";
        var li12 = document.createElement("li");
        li12.className = "list-group-item"
        var text12 = resume[12].title;
        li12.innerHTML=text12;
        card12.appendChild(li12);

        // Dates
        var ul12 = document.createElement("ul");
        ul12.className = "list-group list-group-flush";
        var li12 = document.createElement("li");
        li12.className = "list-group-item"
        var text12 = resume[12].dates;
        li12.innerHTML=text12;
        card12.appendChild(li12);
        
        // City
        var ul12 = document.createElement("ul");
        ul12.className = "list-group list-group-flush";
        var li12 = document.createElement("li");
        li12.className = "list-group-item"
        var text12 = resume[12].city;
        li12.innerHTML=text12;
        card12.appendChild(li12);

        // Description
        var ul12 = document.createElement("ul");
        ul12.className = "list-group list-group-flush";
        var li12 = document.createElement("li");
        li12.className = "list-group-item"
        var text12 = resume[12].description;
        li12.innerHTML=text12;
        card12.appendChild(li12);


        // Card 13
        // Work Name
        var work13 = document.createElement("h5");
        work13.className = "card-title";
        var title13 = resume[13].work;
        work13.innerHTML=title13;
        heading13.appendChild(work13);
        
        // Title
        var ul13 = document.createElement("ul");
        ul13.className = "list-group list-group-flush";
        var li13 = document.createElement("li");
        li13.className = "list-group-item"
        var text13 = resume[13].title;
        li13.innerHTML=text13;
        card13.appendChild(li13);

        // Dates
        var ul13 = document.createElement("ul");
        ul13.className = "list-group list-group-flush";
        var li13 = document.createElement("li");
        li13.className = "list-group-item"
        var text13 = resume[13].dates;
        li13.innerHTML=text13;
        card13.appendChild(li13);
        
        // City
        var ul13 = document.createElement("ul");
        ul13.className = "list-group list-group-flush";
        var li13 = document.createElement("li");
        li13.className = "list-group-item"
        var text13 = resume[13].city;
        li13.innerHTML=text13;
        card13.appendChild(li13);

        // Description
        var ul13 = document.createElement("ul");
        ul13.className = "list-group list-group-flush";
        var li13 = document.createElement("li");
        li13.className = "list-group-item"
        var text13 = resume[13].description;
        li13.innerHTML=text13;
        card13.appendChild(li13);


        // Card 14
        // Work Name
        var work14 = document.createElement("h5");
        work14.className = "card-title";
        var title14 = resume[14].work;
        work14.innerHTML=title14;
        heading14.appendChild(work14);
        
        // Title
        var ul14 = document.createElement("ul");
        ul14.className = "list-group list-group-flush";
        var li14 = document.createElement("li");
        li14.className = "list-group-item"
        var text14 = resume[14].title;
        li14.innerHTML=text14;
        card14.appendChild(li14);

        // Dates
        var ul14 = document.createElement("ul");
        ul14.className = "list-group list-group-flush";
        var li14 = document.createElement("li");
        li14.className = "list-group-item"
        var text14 = resume[14].dates;
        li14.innerHTML=text14;
        card14.appendChild(li14);
        
        // City
        var ul14 = document.createElement("ul");
        ul14.className = "list-group list-group-flush";
        var li14 = document.createElement("li");
        li14.className = "list-group-item"
        var text14 = resume[14].city;
        li14.innerHTML=text14;
        card14.appendChild(li14);

        // Description
        var ul14 = document.createElement("ul");
        ul14.className = "list-group list-group-flush";
        var li14 = document.createElement("li");
        li14.className = "list-group-item"
        var text14 = resume[14].description;
        li14.innerHTML=text14;
        card14.appendChild(li14);


        // Card 15
        // Work Name
        var work15 = document.createElement("h5");
        work15.className = "card-title";
        var title15 = resume[15].work;
        work15.innerHTML=title15;
        heading15.appendChild(work15);
        
        // Title
        var ul15 = document.createElement("ul");
        ul15.className = "list-group list-group-flush";
        var li15 = document.createElement("li");
        li15.className = "list-group-item"
        var text15 = resume[15].title;
        li15.innerHTML=text15;
        card15.appendChild(li15);

        // Dates
        var ul15 = document.createElement("ul");
        ul15.className = "list-group list-group-flush";
        var li15 = document.createElement("li");
        li15.className = "list-group-item"
        var text15 = resume[15].dates;
        li15.innerHTML=text15;
        card15.appendChild(li15);
        
        // City
        var ul15 = document.createElement("ul");
        ul15.className = "list-group list-group-flush";
        var li15 = document.createElement("li");
        li15.className = "list-group-item"
        var text15 = resume[15].city;
        li15.innerHTML=text15;
        card15.appendChild(li15);

        // Description
        var ul15 = document.createElement("ul");
        ul15.className = "list-group list-group-flush";
        var li15 = document.createElement("li");
        li15.className = "list-group-item"
        var text15 = resume[15].description;
        li15.innerHTML=text15;
        card15.appendChild(li15);

        // Card 16
        // Work Name
        var work16 = document.createElement("h5");
        work16.className = "card-title";
        var title16 = resume[16].work;
        work16.innerHTML=title16;
        heading16.appendChild(work16);
        
        // Title
        var ul16 = document.createElement("ul");
        ul16.className = "list-group list-group-flush";
        var li16 = document.createElement("li");
        li16.className = "list-group-item"
        var text16 = resume[16].title;
        li16.innerHTML=text16;
        card16.appendChild(li16);

        // Dates
        var ul16 = document.createElement("ul");
        ul16.className = "list-group list-group-flush";
        var li16 = document.createElement("li");
        li16.className = "list-group-item"
        var text16 = resume[16].dates;
        li16.innerHTML=text16;
        card16.appendChild(li16);
        
        // City
        var ul16 = document.createElement("ul");
        ul16.className = "list-group list-group-flush";
        var li16 = document.createElement("li");
        li16.className = "list-group-item"
        var text16 = resume[16].city;
        li16.innerHTML=text16;
        card16.appendChild(li16);

        // Description
        var ul16 = document.createElement("ul");
        ul16.className = "list-group list-group-flush";
        var li16 = document.createElement("li");
        li16.className = "list-group-item"
        var text16 = resume[16].description;
        li16.innerHTML=text16;
        card16.appendChild(li16);


        // Card 18
        // Work Name
        var work18 = document.createElement("h5");
        work18.className = "card-title";
        var title18 = resume[18].work;
        work18.innerHTML=title18;
        heading18.appendChild(work18);
        
        // Title
        var ul18 = document.createElement("ul");
        ul18.className = "list-group list-group-flush";
        var li18 = document.createElement("li");
        li18.className = "list-group-item"
        var text18 = resume[18].title;
        li18.innerHTML=text18;
        card18.appendChild(li18);

        // Dates
        var ul18 = document.createElement("ul");
        ul18.className = "list-group list-group-flush";
        var li18 = document.createElement("li");
        li18.className = "list-group-item"
        var text18 = resume[18].dates;
        li18.innerHTML=text18;
        card18.appendChild(li18);
        
        // City
        var ul18 = document.createElement("ul");
        ul18.className = "list-group list-group-flush";
        var li18 = document.createElement("li");
        li18.className = "list-group-item"
        var text18 = resume[18].city;
        li18.innerHTML=text18;
        card18.appendChild(li18);

        // Description
        var ul18 = document.createElement("ul");
        ul18.className = "list-group list-group-flush";
        var li18 = document.createElement("li");
        li18.className = "list-group-item"
        var text18 = resume[18].description;
        li18.innerHTML=text18;
        card18.appendChild(li18);


        // Card 19
        // Work Name
        var work19 = document.createElement("h5");
        work19.className = "card-title";
        var title19 = resume[19].work;
        work19.innerHTML=title19;
        heading19.appendChild(work19);
        
        // Title
        var ul19 = document.createElement("ul");
        ul19.className = "list-group list-group-flush";
        var li19 = document.createElement("li");
        li19.className = "list-group-item"
        var text19 = resume[19].title;
        li19.innerHTML=text19;
        card19.appendChild(li19);

        // Dates
        var ul19 = document.createElement("ul");
        ul19.className = "list-group list-group-flush";
        var li19 = document.createElement("li");
        li19.className = "list-group-item"
        var text19 = resume[19].dates;
        li19.innerHTML=text19;
        card19.appendChild(li19);
        
        // City
        var ul19 = document.createElement("ul");
        ul19.className = "list-group list-group-flush";
        var li19 = document.createElement("li");
        li19.className = "list-group-item"
        var text19 = resume[19].city;
        li19.innerHTML=text19;
        card19.appendChild(li19);

        // Description
        var ul19 = document.createElement("ul");
        ul19.className = "list-group list-group-flush";
        var li19 = document.createElement("li");
        li19.className = "list-group-item"
        var text19 = resume[19].description;
        li19.innerHTML=text19;
        card19.appendChild(li19);


      // Card 20
        // Work Name
        var work20 = document.createElement("h5");
        work20.className = "card-title";
        var title20 = resume[20].work;
        work20.innerHTML=title20;
        heading20.appendChild(work20);
        
        // Title
        var ul20 = document.createElement("ul");
        ul20.className = "list-group list-group-flush";
        var li20 = document.createElement("li");
        li20.className = "list-group-item"
        var text20 = resume[20].title;
        li20.innerHTML=text20;
        card20.appendChild(li20);

        // Dates
        var ul20 = document.createElement("ul");
        ul20.className = "list-group list-group-flush";
        var li20 = document.createElement("li");
        li20.className = "list-group-item"
        var text20 = resume[20].dates;
        li20.innerHTML=text20;
        card20.appendChild(li20);
        
        // City
        var ul20 = document.createElement("ul");
        ul20.className = "list-group list-group-flush";
        var li20 = document.createElement("li");
        li20.className = "list-group-item"
        var text20 = resume[20].city;
        li20.innerHTML=text20;
        card20.appendChild(li20);

        // Description
        var ul20 = document.createElement("ul");
        ul20.className = "list-group list-group-flush";
        var li20 = document.createElement("li");
        li20.className = "list-group-item"
        var text20 = resume[20].description;
        li20.innerHTML=text20;
        card20.appendChild(li20);


    // Card 21
        // Work Name
        var work21 = document.createElement("h5");
        work21.className = "card-title";
        var title21 = resume[21].work;
        work21.innerHTML=title21;
        heading21.appendChild(work21);
        
        // Title
        var ul21 = document.createElement("ul");
        ul21.className = "list-group list-group-flush";
        var li21 = document.createElement("li");
        li21.className = "list-group-item"
        var text21 = resume[21].title;
        li21.innerHTML=text21;
        card21.appendChild(li21);

        // Dates
        var ul21 = document.createElement("ul");
        ul21.className = "list-group list-group-flush";
        var li21 = document.createElement("li");
        li21.className = "list-group-item"
        var text21 = resume[21].dates;
        li21.innerHTML=text21;
        card21.appendChild(li21);
        
        // City
        var ul21 = document.createElement("ul");
        ul21.className = "list-group list-group-flush";
        var li21 = document.createElement("li");
        li21.className = "list-group-item"
        var text21 = resume[21].city;
        li21.innerHTML=text21;
        card21.appendChild(li21);

        // Description
        var ul21 = document.createElement("ul");
        ul21.className = "list-group list-group-flush";
        var li21 = document.createElement("li");
        li21.className = "list-group-item"
        var text21 = resume[21].description;
        li21.innerHTML=text21;
        card21.appendChild(li21);



        card21.body.appendChild();
    };
};
resumeCards();








// function addCard2() {
//     for (var i = 0; i < education.length; i++) {
//         // City
//         var ul2 = document.createElement("ul");
//         ul2.className = "list-group list-group-flush";
//         var li2 = document.createElement("li");
//         li2.className = "list-group-item"

//         var text2 = education[1].city;
//         li2.innerHTML=text2;
//         card2.appendChild(li2);

//         // Graduation Date
//         var ul2 = document.createElement("ul");
//         ul2.className = "list-group list-group-flush";
//         var li2 = document.createElement("li");
//         li2.className = "list-group-item"

//         var text2 = education[1].graduated;
//         li2.innerHTML=text2;
//         card2.appendChild(li2);

//         // Degree
//         var ul2 = document.createElement("ul");
//         ul2.className = "list-group list-group-flush";
//         var li2 = document.createElement("li");
//         li2.className = "list-group-item"

//         var text2 = education[1].degree;
//         li2.innerHTML=text2;
//         card2.appendChild(li2);

//         card2.body.appendChild(addCard2);
        
//     };
// };
// addCard2();



// function addCard2() {
//     for (var i = 0; i < education.length; i++) {
//         // City
//         var div = document.createElement("div");
//         div.className = "card";
//         var p = document.createElement("p");

//         var text = education[1].city;
//         p.innerHTML=text;
//         city.appendChild(p);
//         console.log(text);

//         // Graduation Date
//         var div1 = document.createElement("div");
//         div1.className = "card";
//         var p1 = document.createElement("p");

//         var text1 = education[1].graduated;
//         p1.innerHTML=text1;
//         city.appendChild(p1);

//         // Degree
//         var div2 = document.createElement("div");
//         div2.className = "card";
//         var p2 = document.createElement("p");

//         var text2 = education[1].degree;
//         p2.innerHTML=text2;
//         city.appendChild(p2);
        
//         document.body.appendChild(addCard2);
//     };
// };


// function addCard3() {
//     for (var i = 0; i < education.length; i++) {
//         // City
//         var div = document.createElement("div");
//         div.className = "card";
//         var p = document.createElement("p");

//         var text = education[i].city;
//         p.innerHTML=text;
//         city.appendChild(p);
//         console.log(text);

//         // Graduation Date
//         var div1 = document.createElement("div");
//         div1.className = "card";
//         var p1 = document.createElement("p");

//         var text1 = education[i].graduated;
//         p1.innerHTML=text1;
//         city.appendChild(p1);

//         // Degree
//         var div2 = document.createElement("div");
//         div2.className = "card";
//         var p2 = document.createElement("p");

//         var text2 = education[i].degree;
//         p2.innerHTML=text2;
//         city.appendChild(p2);
        
//     };
// };


// addCard3();










