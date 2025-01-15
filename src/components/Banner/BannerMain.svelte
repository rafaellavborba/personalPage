<script>
    import { onMount } from "svelte";
    import NavBar from "../Nav/NavBar.svelte";
    import { observeVisibility } from '../../actions/observeVisibility';
    import { visibleComponents } from '../../stores/visibilityStore';

    export let id; // Identificação única para este componente
    let isVisible = false;

    $: isVisible = $visibleComponents.has(id);

    let currentFraseIndex = 0; 
    const frases = [
        "Crafting intuitive web and mobile experiences that inspire and engage.",
        "Transforming ideas into impactful digital solutions."
    ];

    onMount(() => {
        const interval = setInterval(() => {
            currentFraseIndex = (currentFraseIndex + 1) % frases.length;
        }, 4000); 

        return () => clearInterval(interval);
    });
</script>

<section id={id} class="bannerMain" use:observeVisibility={{ id }} class:visible={isVisible}>
    <div class="container bannerMain__content">
        <NavBar />

        <div class="bannerMain__animation">
            {#each frases as frase, index}
                <p 
                    class={`bannerMain__text 
                    ${index === currentFraseIndex ? 'bannerMain__text-active' : ''} 
                    ${index < currentFraseIndex ? 'bannerMain__text-exit' : ''}`}
                >
                    {frase}
                </p>
            {/each}
        </div>
    </div>
</section>

<style lang="scss" scoped>
.bannerMain {
    display: flex;
    justify-content: center;
    background: url('../../assets/images/banner.png') no-repeat;
    background-size: 100%;
    height: 100%;
    width: 100vw;
    max-height: 320px;
    position: relative;
    background-position-x: center;
    background-position-y: 35%;
   
    &__content{
        width: 100%;
    }
    &__animation{
        position: absolute;
        left: 20px;
        width: 200px;
        font-size: 0.8rem;
        bottom: 30%;
        overflow: hidden;
        min-height: 4rem;
    }
    &__text{
        position: absolute;
        opacity: 0;
        transform: translateY(150%);
        transition: all 1s ease-in-out;
        height: fit-content;
    }
    &__text-active {
        opacity: 1;
        transform: translateY(0); 
        overflow: visible;
    }

    &__text-exit {
        opacity: 0;
        transform: translateY(100%);
    }
}
@media(min-width: 375px){
    .bannerMain{
        &__animation{
            bottom: 20%;
        }
    }
}
@media (min-width: 425px){
    .bannerMain{
        max-height: 390px;
        &__animation{
            left: 20px;
            bottom: 25%;
            font-size: 1rem;
            height: 5rem;
            width: 235px;
        }
    }
}
@media (min-width: 500px){
    .bannerMain{
        max-height: 490px;
        &__animation{
            width: 250px;
            font-size: 1.05rem;
        }
    }
}
@media (min-width: 625px){
    .bannerMain{
        max-height: 715px;

        &__animation{
            width: 385px;
            font-size: 1.3rem;
            height: 6rem;

        }
    }
}
@media(min-width: 725px){
    .bannerMain{
        &__animation{
            bottom: 20%;
        }
    }
}
@media (min-width: 768px){
    .bannerMain{
        max-height: 760px;
        background-position-x: 60%;
        &__text{
            line-height: 2rem;
            letter-spacing: 1px;
        }
        &__animation{
            width: 400px;
            font-size: 1.4rem;
            bottom: 100px;
            left: 40px;
            height: 7.5rem;
        }
    }
}
@media (min-width: 1024px){
    .bannerMain{
        max-height: 100vh;
        background: url('../../assets/images/banner_desk.png') no-repeat;
        background-position-x: 65%;
        background-position-y: center;
        background-size: cover;

        &__animation{
            width: 470px;
            font-size: 1.8rem;
            bottom: 80px;
            left: 100px;
            height: 9rem;
        }
    }
}
@media (min-width: 1245px){
    .bannerMain{
        &__animation{
            left: 130px;

        }
    }
}
@media (min-width: 1440px){
    .bannerMain{
        &__animation{
            left: 240px;
            font-size: 2rem;
            width: 600px;
        }
    }
}
</style>