<template>
  <section class="about">
    <h1 class="about__title">О нас</h1>

    <h2 class="about__subtitle">Мы делаем шикарные украшения для вас</h2>

    <p class="about__text">
      Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
      sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
      pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
      placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
      sodales lectus placerat quis.
    </p>

    <ul class="about__list">
      <li class="about__item">
        <article class="about__item-content">
          <h3 class="about__item-title">Тренды в украшениях</h3>
          <div class="about__image-block">
            <img
              src="../assets/about-img-1.jpg"
              width="670"
              height="300"
              alt="about-img-1"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis.
          </p>

          <ul>
            <li>consectetur adipiscing elit. Aliquam placerat</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
          </ul>
        </article>
      </li>
      <li class="about__item">
        <article class="about__item-content">
          <h3 class="about__item-title">Сделано с любовью</h3>
          <div class="about__image-block">
            <img
              src="../assets/about-img-2.jpg"
              width="670"
              height="300"
              alt="about-img-2"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
            odio, in molestie diam bibendu.ss
          </p>
        </article>
      </li>
    </ul>
  </section>
</template>

<style>
.about {
  max-width: 670px;
  margin: 0 auto;
  min-height: 100vh;
  padding-bottom: 266px;
}

.about__title {
  margin-bottom: 24px;
}

.about__subtitle {
  margin-bottom: 48px;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  color: var(--color-black);
}

.about__text {
  margin-bottom: 48px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--color-black);
}

.about__list {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.about__item-title {
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 26px;
  line-height: 135%;
  color: var(--color-black);
}

.about__image-block {
  margin-bottom: 48px;
}

.about__item-content p {
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  color: var(--color-black);
}

.about__item-content p:not(:last-child) {
  margin-bottom: 16px;
}

.about__item-content ul {
  list-style: none;
}

.about__item-content ul li {
  position: relative;
  padding-left: 16px;
}

.about__item-content ul li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 50%;
  font-size: 26px;
  color: var(--color-black);
  transform: translateY(-50%);
}

@media screen and (max-width: 768px) {
  .about {
    max-width: 100%;
    padding: 0 16px;
    padding-bottom: 100px;
  }

  .about__item-title {
    text-align: center;
  }

  .about__image-block img {
    width: 100%;
    max-height: 220px;
  }
}
</style>
