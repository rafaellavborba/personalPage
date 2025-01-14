<script>
  let isDragging = false;
  let startX;
  let scrollLeft;
  let scrollContainer

  const startDrag = (event, container) => {
    isDragging = true;
    startX = event.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  };

  const stopDrag = () => {
    isDragging = false;
  };

  const handleMouseMove = (event, container) => {
    if (!isDragging) return;
    const x = event.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; 
    container.scrollLeft = scrollLeft - walk;
  };

    const exp = [
        {
            year: '2019',
            desc: 'I initially graduated in International Trade, an area that sparked my interest. However, my love for technology ultimately won me over, and I decided to shift my career in that direction.',
        },
        {
            year: 'Jan - Sep, 2022',
            desc: 'I embarked on my journey of learning programming online, entirely self-taught. For four months, I devoted 8 hours a day to mastering this craft. I had the opportunity to gain hands-on experience as a front-end developer by volunteering for Lacrei. This experience provided me with invaluable learning, enhancing my skills and allowing me to contribute to an important cause.',
        },
        {
            year: 'Aug, 2022 - Feb, 2024',
            desc: 'I was hired as a junior developer at M2 Digital, a technology company focused on telecommunications resale. My work at M2 Digital was recognized, leading to my promotion to mid-level developer. Seeking to further enhance my education in web development, I completed a postgraduate course in Web Development, and I am currently pursuing a degree in Analysis and Systems Development. This combination of theoretical knowledge and practical experience has equipped me with a solid foundation and prepared me for the challenges of the market.',
        },
        {
            year: 'Mar, 2024 - at moment',
            desc: 'Currently, I lead the frontend development at Gelato Borelli, a company that seamlessly blends a warm family atmosphere with cutting-edge technology and innovation. In this role, I collaborate with developers to enhance user experience and accessibility while contributing directly to the codebase. Additionally, I am delving into the captivating field of Machine Learning Engineering through advanced studies, broadening my expertise in this dynamic domain.',
        },
     
    ]
</script>

<section 
    id="career" 
    class="experience" 
    
>
   <h2 class="experience__title">My Journey: Crafting Digital Experiences</h2>
   <div class="experience__line"></div>
   <button class="experience__content scrollable-container" 
        bind:this={scrollContainer}
        aria-label="Scrollable content" 
        tabindex="0"
        on:mousedown={(event) => startDrag(event, scrollContainer)}
        on:mouseup={stopDrag}
        on:mouseleave={stopDrag}
        on:mousemove={(event) => handleMouseMove(event, scrollContainer)}>
    {#each exp as item}
        <div class="experience__item">
            <div class="experience__mark"></div>
            <p class="experience__year">{item.year}</p>
            <span class="experience__desc">{item.desc}</span>
        </div>
    {/each}
    </button>
</section>

<style lang="scss" scoped>
.experience {
    text-align: center;
    min-height: 500px;
    height: auto;
    overflow: hidden; 
    cursor: grab;

    &__title{
        margin: 40px 0;
    }
    &__line{
        height: 1px;
        width: 100%;
        background-color: black;
        position: absolute;
        top: 140px;
    }
    &__content {
        cursor: pointer;
        display: flex;
        border: none;
        background-color: transparent;
        margin: 20px 0;
        width: 100vw;
        min-height: 600px;
        height: auto;
        font-size: 1.2rem;

        overflow-x: scroll;
        top: 113px;
        position: absolute;
        z-index: 2;
        padding-right: 80px;
        &::-webkit-scrollbar {
            display: none; 
        }
        &:hover{
            color: black;
            transform: scale(1);
            font-weight: normal;
        }
    }
    &__item{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 230px;
        max-width: 230px;
        margin: 0 8px;
    }
    &__mark{
        height: 15px;
        width: 15px;
        background: #6a4848;
    }
    &__year{

    }
    &__desc{
        text-align: start;
        scale: (1);
        transition: all 0.3s ease-in;
        &:hover{
            transform: scale(1.02);
            transition: all 0.3s ease-out;

        }
    }
}
@media(min-width: 425px){
    .experience{
        &__item{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            min-width: 300px;
            max-width: 300px;
            margin-right: 24px;
        }
    }
}
@media(min-width: 1024px){
    .experience{
        height: 700px;
        &__title{
            margin: 60px 0;
        }
    }
}
</style>