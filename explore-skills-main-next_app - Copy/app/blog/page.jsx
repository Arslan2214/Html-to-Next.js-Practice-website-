import Header from "@/components/Header";
import Image from "next/image";
import Input_Field from "./(components)/Input_Field";
import Button from "@/components/Purpple_Border_Btn";
import Side_List_Item from "./(components)/Side_List_Item";

export default function Blog() {
  return (
    <>
      <Header title="Blog" />

      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <h2>Our Certificate & Online Program</h2>
            <h5>Aug 1, 2021</h5>
            <Image
              width={100}
              height={120}
              src="/img/post.png"
              alt="blog_image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolor consequatur, nobis quae obcaecati delectus at
              aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum
              dolore velit odit cumque, quos doloribus sint id aperiam eius
              aliquam quo modi sequi rem quia exercitationem laborum, ratione
              expedita! Deleniti velit officia incidunt illum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>

            <div className="comment-box">
              <h3>Leave a Comment</h3>
              <form className="comment-form">
                <Input_Field type="text" place="Enter Name" />
                <Input_Field type="email" place="Enter Email" />
                <textarea rows="5" placeholder="Your Comment"></textarea>
                <Button text="POST COMMENT" />
              </form>
            </div>
          </div>

          <div className="blog-right">
            <h3>Post Categories</h3>
            <Side_List_Item title="Business Analytics" count="12" />
            <Side_List_Item title="Machine Learning" count="29" />
            <Side_List_Item title="Computer Science" count="15" />
            <Side_List_Item title="Data Analytics" count="22" />
            <Side_List_Item title="Full Stack" count="20" />
          </div>
        </div>
      </section>
    </>
  );
}
