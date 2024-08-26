import Button from "@/components/Purpple_Border_Btn";
import Header from "@/components/Header";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header title="About" />

      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world&apos;s largest University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cumque in accusantium molestias maiores fuga vitae eos, ducimus
              officiis repudiandae voluptatem error. Laboriosam, numquam
              blanditiis aspernatur, nobis tempora consequatur id aliquam
              asperiores voluptatum iste animi voluptatem fugiat totam excepturi
              dolor.
            </p>
            <Button text="Explore Now" />
          </div>
          <div className="about-col">
            <Image width={100} height={100} src="/img/about.png" alt="about_image" />
          </div>
        </div>
      </section>
    </>
  );
}
