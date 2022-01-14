/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
    {
        sl1:1,
        name1 : "Christian Dillstrom",
        designation1 : "Editor in Chief - The TOP Person Magazine",
        image1 : "assets/images/references-page/Christian_Dillstrom.jpeg",
        message1 : "Mahesh is an ambassador of The TOP Person charitable initiative and business magazine. He is a valuable asset for us and he is supporting both of our cause and his fellow ambassadors. I think that Mahesh would do well in positions where fortitude and compassion is required.",
        

        sl2:2,
        name2 : "Hari Priya",
        designation2 : "Bussiness Analyst at Teknowmics K.K", 
        image2: "assets/images/references-page/Hari_Priya.jpeg",
        message2 : "Mahesh is one of my good friend and I came to know more about him through LinkedIn. He is very passionate in the works that he is involved with. I really feel happy to have him in my network as he is really supportive and is a role model for everyone in this network. He is more passionate about machine learning and its real world applications. He is serving as the Ambassador of The TOP Person which is an International Business, Politics and NGO Magazine & a Global Initiative with HUB. Also, he is the College Ambassador of Techfest, IIT Bombay. He is involved in several communities and is the Secretary of ICFOSS. He has great passion for tech and is doing his best in organizing workshops and evets to do the best out of him. He has exceptional leadership skills as an Ambassador. He is a great personality to work with and having you in my connections will be a great asset. I highly recommend Mahesh as he is a man with tremendous potential and ambition. Best wishes to him to scale great heights!",
        
    },

    {
        sl1:1,
        name1 : "Dr. Sahdev Singh",
        designation1 : "Under Secretary - Ministry of Law and Justice of India",
        image1 : "assets/images/references-page/Dr_Sahdev_Singh.jpeg",
        message1 : " Mr Mahesh is a Charming, has sense of humor, lighthearted Committed, loyal, devoted Considerate, caring, empathetic Courteous, polite Detail-oriented, punctual, quality-minded , and also Determined, persevering, goal-oriented.",
        
        sl2:2,
        name2 : "Advaith Narayan",
        designation2 : "Security Analyst at UST Global",
        image2 : "assets/images/references-page/Advaith.jpeg",
        message2 : "I have had the opportunity of knowing Mahesh Babu for the past. He is a detail oriented, goal oriented, ambitious and powerful co-worker, his knowledge is vast and thorough. I would recommend him with any project that requires the very best in coding. Whenever I had a problem, there has never been a time he has left me without a solution. On account of his mature approach to his responsibilities, I often thought of Mahesh Babu as a professional I could always rely upon to get the job done. Certainly worth recommending.",

        
        
    },

    {
        sl1:1,
        name1 : "Anjali Krishna",
        designation1 : "Content Writer at Earning Designs",
        image1 : "assets/images/references-page/Anjali_Krishna.jpeg",
        message1 : "Mahesh and I met through LinkedIn. His skills in the Flask framework really helped me and my team in building our web application for our college project. He gave us the right directions when we needed them the most. We're grateful to Mahesh for helping us so selflessly.",
        

        sl2:2,
        name2 : "Aparna Unnikrishnan",
        designation2 : "Student at Cochin Institute of Science and Technology",
        image2: "assets/images/references-page/Aparna.jpeg",
        message2 : "I came to know about Mahesh through my friend while we were working on our college project. He helped us when we got stuck with our web application and helped us to finish it perfectly. Thank you Mahesh for helping us at the right time!!",
         
    },
    
    {        
        sl1:1,
        name1 : "Ashana",
        designation1 : "Student at Cochin Institute of Science and Technology",
        image1 : "assets/images/references-page/Ashana.jpeg",
        message1 : "Mahesh is a kind-hearted , polite and a very helpful person , I am really glad to meet him . He helped me and my team a lot in our web project . His knowledge regarding flask, python and database is really great ",

        sl2:2,
        name2 : "Shivam Sinha ",
        designation2 : "Freelance Web Developer",
        image2 : "assets/images/references-page/Shivam.jpeg",
        message2 : "Mahesh is a dedicated and reliable person. He works dedicatedly in a group and has solid information about advances required for programming. He is always excited about learning new aptitudes and endeavors to complete tasks in given time. I recommend that Mahesh Babu would definitely be a resource for any association.",
    }
    
];

AOS.init();   
const fillData = () => {
    let output = "";
    
    references.forEach(
        (
            { sl1, image1, name1, designation1, message1, absbox_for_linkedin1,
             sl2, image2, name2, designation2, message2, absbox_for_linkedin2 }
        ) =>
           (output +=
            `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`
                )
            );
            referenceTable.innerHTML = output;
        }
document.addEventListener("DOMContentLoaded", fillData);
