import React from "react";
import "./Testimonial.scss";
import user1 from "./Media/user_1.png";
import user2 from "./Media/user_2.png";
import user3 from "./Media/user_3.png";
import user4 from "./Media/user_4.png";
import user5 from "./Media/user_5.png";

import { ReviewCard } from "./ReviewCard";

export const Testimonial = () => {
  return (
    <div>
      <div className="container_testimonial">
        <div className="content_container">
          <div className="heading_container">
            <div className="heading">Hear from our clients</div>
          </div>

          <div className="cards_list">
          <div className="cards_1">
            <ReviewCard
              name="Niranjana Sharma"
              time="Local Guide • 2 months ago"
              pic={user1}
              rating="4.7"
              review_text="Team TaxBuddy came to the rescue in crunch time. They were prompt, courteous and professional. Superlative service a super competitive price. Couldn't be more satisfied. Strongly recommended for every taxpayer in India who wants accurate..."
            />
            <ReviewCard
              name="Subham Saurabh"
              time="1 month ago"
              pic={user4}
              rating="4.9"
              review_text="Tax Buddy was a breeze to work with. It's a straightforward procedure that's easy to follow. All you have to do is fill out the form with the relevant information and submit necessary documents as requested by them."
            />
          </div>

          <div className="cards_2">
            <ReviewCard
              name="Rohan Baruah"
              time="3 months ago"
              pic={user2}
              rating="5"
              review_text={
                <>
                  Positive : Professionalism, Responsiveness.
                  <br />
                  Rajkumar was very responsive and prompt
                  <br /> throughout the return filing process.
                  <br /> Even though it was taking some time on the govt
                  <br /> portal, I knew that the work. <br />
                  <br />
                </>
              }
            />

            <ReviewCard
              name="Aahan Shetty"
              time="1 month ago"
              pic={user5}
              rating="5"
              review_text="Right from the start the process was very smooth. The tax buddy assigned (Mr Gaurishankar) was extremely helpful, proactive, patient and answered all questions. Not only did I avail the service, because of the great experience, made my spouse use the service as well. recommend highly and continue the services again"
            />
          </div>

          <div className="cards_3">
            <ReviewCard
              name="Rahul Patil"
              time="Local Guide • 2 months ago"
              pic={user3}
              rating="4.9"
              review_text={
                <>
                  Positive : Quality. <br /> <br /> <br /> Right from the start
                  the process was very smooth. The tax buddy assigned (Mr
                  Gaurishankar) was extremely helpful, proactive, patient and
                  answered all questions. Not only did I avail the service,
                  because of the great experience, made my spouse use the
                  service as well. recommend highly and continue the services
                  again. I talked with Nikita Chilveri and my overall experience
                  with tax buddy was so wonderful, they are so professional and
                  the way Nikita explained everything to me was really helpful.
                </>
              }
            />
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};
