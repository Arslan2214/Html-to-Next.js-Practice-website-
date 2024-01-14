import Button from "@/components/Purpple_Border_Btn";
import Campus_Card from "@/components/Campus_Card";
import Colored_Card from "@/components/Colored_Card";
import Image_Card from "@/components/Image_Card";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";
import White_Border_Btn from "@/components/White_Border_Btn";

export default function Home() {
  return (
    <>
      <section className="header">
        <nav>
          <Link href="/" className="logo">
            Xplore
            <i className="fab fa-staylinked"></i>kill
          </Link>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onclick="hideMenu()"></i>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/course">Course</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onclick="showMenu()"></i>
        </nav>

        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <White_Border_Btn
            href="/about"
            className="hero_btn"
            text="Visit Us To Know More"
          />
        </div>
      </section>

      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>
          EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Colored_Card
            title="Undergraduate Programs"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non."
          />
          <Colored_Card
            title="Graduate Programs"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non."
          />
          <Colored_Card
            title="Adult Learning & Degree Completion"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non."
          />
        </div>
      </section>

      {/* <!-- Campus Section Start--> */}

      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Campus_Card src="/img/Campus1.png" alt="" text="DELHI" />
          <Campus_Card src="/img/Campus2.png" alt="" text="HYDERABAD" />
          <Campus_Card src="/img/Campus3.png" alt="" text="MUMBAI" />
        </div>
      </section>

      {/* <!-- Facilities Section Start --> */}
      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Image_Card
            src="/img/libary.png"
            alt=""
            title="Best Libary"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."
          />
          <Image_Card
            src="/img/playground.png"
            alt=""
            title="Athletics"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."
          />
          <Image_Card
            src="/img/food.png"
            alt=""
            title="Tasty and Healthy Food"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."
          />
        </div>
      </section>

      {/* <!-- Testimonials Section Start --> */}
      <section className="testimonials">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Testimonial
            src="/img/user.png"
            alt="oo.."
            name="Student Name"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime."
          />
          <Testimonial
            src="/img/user.png"
            alt="oo.."
            name="Student Name"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime."
          />
        </div>
      </section>

      {/* <!-- Call To Action Section Start --> */}
    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <White_Border_Btn href="/contact" text="CONTACT US" />
    </section>
    </>
  );
}
