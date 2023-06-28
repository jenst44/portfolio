import './study.css';

export const Module = () => {
    
    return(
        <div className="CaseStudy__Container">
            <p className="CaseStudy__Role">My role: Lead developer, and system/code architect in a team of 8 people</p>
            <div className="CaseStudy__Body">
                <div className="CaseStudy__Section">
                    <h3>The Brief:</h3>
                    <p>Microsoft’s global event series titled, IoT in Action, is a way for attendees and IoT partners to come together and learn about the most prominent IoT technologies and explore opportunities within the ever-growing IoT ecosystem. At various cities around the world, the events feature top speakers and presentations in IoT business and technical paths. The objectives were to provide the technology to enable Microsoft to handle all aspects of management for the event series, increase attendance, connect Microsoft Partners to encourage collaboration via Azure, and improve the number of tele-qualified prospects as well as the way we track them through the sales pipeline.</p>
                </div>
                <div className="CaseStudy__Section">
                    <h3>The Solution:</h3>
                    <p>EAS carried out an analysis based on the client’s requirements. Having worked extensively with Microsoft’s Consumer Device Sales org, we already had some sound technologies already in place for event registration. By cracking them back open we found new opportunities for scaling globally in the following areas of operation.</p>
                    <h4>Registration System</h4>
                    <p>The registration system allowed interested individuals to sign up for conferences and webinars seamlessly. It provided a user-friendly interface for attendees to submit their details, select preferred events, and receive confirmation emails with event information.</p>
                    <h4>Match-Making System</h4>
                    <p>To enhance networking opportunities, the match-making system intelligently connected conference attendees based on their professional interests and backgrounds. This feature facilitated meaningful interactions and collaborations during both in-person conferences and remote webinars.</p>
                    <h4>Check-In Application</h4>
                    <p>The check-in application simplified the on-site registration process for in-person conferences. Attendees could scan their event tickets or enter their registration details through a user-friendly mobile application, streamlining the check-in process and minimizing waiting times. The application would print custom badges for each attendees using a custom HTML canvas template. It was created using electron.js and ran on Microsoft surface devices.</p>
                    <h4>Custom Admin and Analytics System</h4>
                    <p>The custom admin and analytics system empowered event organizers to efficiently manage conferences and webinars. It provided a comprehensive dashboard where administrators could monitor registration data, track attendee engagement, and gain valuable insights to enhance future events.</p>
                    <h4>Webinar System</h4>
                    <p>With the onset of the COVID-19 pandemic, the "IoT in Action" platform swiftly adapted to fully remote events. The integrated webinar system enabled seamless virtual conferences and webinars, complete with live streaming capabilities, interactive chat functionality, and Q&A sessions. Attendees could access webinars remotely, ensuring the continuity of knowledge exchange despite physical limitations.</p>
                </div>
                <div className="CaseStudy__Section">
                    <h3>Implementation and Impact:</h3>
                    <h4>In-person Conferences</h4>
                    <p>The platform successfully facilitated 48 conferences in 38 cities worldwide. The registration system garnered over 40,000 registrations with 24,000 attendees, indicating a strong interest in the IoT industry. Attendees benefited from the match-making system, fostering connections and collaborations among like-minded professionals.</p>
                    <h4>Transition to Remote Webinars</h4>
                    <p>In response to COVID-19 restrictions, the platform seamlessly transitioned to fully remote events. The webinar system played a pivotal role, enabling remote attendance and preserving the essence of knowledge sharing and networking. Over 50 webinars were conducted, attracting thousands of attendees from across the globe.</p>
                    <h4>Social Media Engagement</h4>
                    <p>The "IoT in Action" platform generated significant buzz on social media, particularly on Twitter. The dedicated hashtag #IoTinActionMS garnered 2 million impressions, amplifying the reach of the conferences and webinars, and increasing engagement within the IoT community.</p>
                </div>
            </div>
        </div>
    )
}

export default Module;
