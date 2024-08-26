import Header from "@/components/Header";
import Colored_Card from "@/components/Colored_Card";
import Image_Card from "@/components/Image_Card";

export default function Course() {
  return (
    <>
      <Header title="Course" />

      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Colored_Card
            title="Undergraduate Programs"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non."
          />
          <Colored_Card
            title="Graduate Programs"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non."
          />
          <Colored_Card
            title="Adult Learning & Degree Completion"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non."
          />
        </div>
      </section>

      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Image_Card
            src="/img/course1.png"
            alt="Card_Image"
            title="Web Development"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."
          />
          <Image_Card
            src="/img/course2.png"
            alt="Card_Image"
            title="Artificial Intelligence"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."
          />
          <Image_Card
            src="/img/course3.png"
            alt="Card_Image"
            title="Data Science"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."
          />
        </div>
      </section>
    </>
  );
}
