<script>
    import { observeVisibility } from '../../actions/observeVisibility';
    import { visibleComponents } from '../../stores/visibilityStore';

    export let id; // Identificação única para este componente
    let isVisible = false;

    $: isVisible = $visibleComponents.has(id);

    const skills = [
        {
            image: 'typescript.svg',
            alt: 'TypeScript'
        },
        {
            image: 'javascript_logo.webp',
            alt: 'JavaScript'
        },
        {
            image: 'vuejs.webp',
            alt: 'Vue'
        },
        {
            image: 'svelte_logo.webp',
            alt: 'Svelte'
        },
        {
            image: 'react.svg',
            alt: 'React'
        },
        {
            image: 'native.png',
            alt: 'React Native'
        },

    ]
</script>

<section id={id} class="skills" class:visible={isVisible} use:observeVisibility={{ id }}>
    <div class="container skills__content">
        <h2 class="skills__title">Skills</h2>
    </div>
    <div class="skills__logo">
    {#each skills as item}
        <img src={'src/assets/icon/' + item.image} alt={item.alt} height="22" class="skills__image"/>
    {/each}
    </div>
</section>

<style lang="scss" scoped>
.skills {
    background: url('../../assets/images/banner_skills.png') no-repeat;
    background-size: 100%;
    background-position-x: 100%;
    background-position-y: 100%;
    min-height: 180px;
    max-height: 100vh;
    height: auto;
    width: 100%;
    margin: 40px 0;
    position: relative;
    &__logo{
        position: absolute;
        left: 44%;
        bottom: 10%;
        display: flex;
        flex-wrap: wrap;
        width: 125px;
        
    }
    &__image{
        margin: 8px;
    }
    &__content {
        padding-top: 40px;
        padding-bottom: 40px;
    }
}
.skills.visible{
    transform: scale(1.02);
    transition: all ease-in-out 0.5s;
    opacity: 1;
}
@media(min-width: 375px){
    .skills {
        height: 200px;
        &__logo{
            width: 140px;
            bottom: 11%;
        }
        &__image{
            height: 25px;
        }
    }
}

@media(min-width: 425px){
    .skills {
        height: 240px;
        &__logo{
            width: 180px;
        }
        &__image{
            height: 34px;
        }
    }
}
@media(min-width: 475px){
    .skills {
        &__logo{
            bottom: 12%;
        }
    }
}
@media(min-width: 500px){
    .skills {
        height: 280px;
        &__image{
            height: 38px;
        }
    }
}
@media(min-width: 565px){
    .skills {
        height: 315px;
        &__image{
            height: 42px;
        }
    }
}
@media(min-width: 625px){
    .skills {
        &__logo{
            left: 48%;
            bottom: 13%;
        }
    }
}
@media(min-width: 700px){
    .skills {
        height: 400px;
        &__logo{
            bottom: 14%;
        }
    }
}
@media(min-width: 768px){
    .skills {
        &__logo{
            left: 50%;
        }
    }
}
@media(min-width: 845px){
    .skills {
        height: 475px;
        &__logo{
            bottom: 14%;
        }
    }
}
@media(min-width: 1024px){
    .skills {
        height: 575px;
        &__content {
            padding-top: 40px;
            padding-bottom: 40px;
        }
    }
}
@media(min-width: 1240px){
    .skills {
        height: 704px;
    }
}
@media(min-width: 1525px){
    .skills {
        height: 865px;
    }
}
@media(min-width: 1825px){
    .skills {
        height: 1035px;
    }
}
@media(min-width: 2440px){
    .skills {
        height: 1435px;
    }
}
</style>