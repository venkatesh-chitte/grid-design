

function Card(){

    const cardData = [
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg", cardTitle: "Fresh Graduate or IT professional Looking for", author: "Arman Ahmed", date: "05 Jul 2019",cardContent: "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology... " },
        { cardImg: "	https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg", cardTitle: "Introducing you all to EdYoda - www.edyoda.com...", author: "Arman Ahmed", date: "05 Jul 2019",cardContent: "Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg", cardTitle: "From identity crisis to the Success Story - The...", author: "Kalyan Mahalingam", date: "05 Jul 2019",cardContent: "DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto in... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg", cardTitle: "Typical day of Data Scientist - An insider story!...", author: "Saurav Ghosh", date: "05 Jul 2019",cardContent: "I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the that are emerging in the world... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg", cardTitle: "Amazon Web Services (AWS) Cloud Day -...", author: "Kalyan Mahalingam", date: "05 Jul 2019",cardContent: "It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels keeping the plates so... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg", cardTitle: "edYoda Meetup #01...", author: "Ashish Pandey", date: "05 Jul 2019",cardContent: "I recently had the opportunity to lead the initiative to organize the first Cloud meetup for..." },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg", cardTitle: "Industry 4.0 - The...", author: "Pitanjal Dutta", date: "05 Jul 2019",cardContent: "Did you ever dream a world where computers are connected and will communicate with... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png", cardTitle: "Why do Database...", author: "Pitanjal Dutta", date: "05 Jul 2019",cardContent: "Wondering why Database Management Systems like MySQL, NOSQL,... " },
        { cardImg: "	https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg", cardTitle: "Master your General...", author: "Pitanjal Dutta", date: "05 Jul 2019",cardContent: "A general aptitude becomes very important, when you apply for a job in a tech company... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg", cardTitle: "Ace your Soft Skills - Tips t...", author: "Pitanjal Dutta", date: "05 Jul 2019",cardContent: "Soft skills are seen to be as important as your technical skill set. When an organisation is... " },
        { cardImg: "	https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg", cardTitle: "Getting started with...", author: "EdYoda", date: "08 Jul 2019",cardContent: "We’re rapidly moving towards a day and age where almost everything can be controlled... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/WhatsApp_Image_2019-06-19_at_17.55.10.jpeg", cardTitle: "Learn these Programmin...", author: "EdYoda", date: "08 Jul 2019",cardContent: "Starting a career as a software developer obviously requires one to undertake... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg", cardTitle: "Learn cloud computing-...", author: "EdYoda", date: "11 Jul 2019",cardContent: "If you learn cloud computing then you can make things much easier for your projects... " },
        { cardImg: "	https://edyoda.s3.amazonaws.com/media/blog-images/1_G1i7GlRPMGboYZdRhOeWaw.png", cardTitle: "Building the University fo-...", author: "Arman Ahmed", date: "20 Jul 2019",cardContent: "The google analytics dashboard was firing up, the whole team, each one of... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/data-mining-an-overview.jpg", cardTitle: "Data Mining: An overview...", author: "EdYoda", date: "21 Jul 2019",cardContent: "The process used by companies to convert raw data into useful information is... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/an-introduction-to-green-cloud-computing.jpg", cardTitle: "An Introduction...", author: "EdYoda", date: "21 Jul 2019",cardContent: "Sustainability has been gaining importance since the last two decade because of the... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/overview-of-natural-language-processing-in-artificial-intelligence.jpg", cardTitle: "Overview of Natural...", author: "EdYoda", date: "21 Jul 2019",cardContent: "Over the last few years, Artificial Intelligence has made a prominent space as it uses... " },
        { cardImg: "https://edyoda.s3.amazonaws.com/media/blog-images/how-humans-tame-the-world-with-artificial-intelligence.jpg", cardTitle: "How Humans Tame the...", author: "EdYoda", date: "23 Jul 2019",cardContent: "Humans evolution and usage of technology have been a constant feature throughou... " },
    ]

    return (
        <>
        {cardData.map((data, i) => {
            return (
              <div key={i} className="card">
                <div className="image-section">
                  <img className="image"
                    src= {data.cardImg} />
                </div>
                <div className="text-section">
                  <div>
                    <h3 id="title">{data.cardTitle}</h3><br></br>
                  </div>
                  <div>
                    <span id="edyoda-text">{data.author}</span>
                    <span id="date"> | {data.date}</span><br></br><br></br>
                    <div className="para-div">
                    <p className='card-para'>{data.cardContent}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </>
    )
}

export default Card;