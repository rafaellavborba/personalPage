<script>
    import { observeVisibility } from '../../actions/observeVisibility';
    import { visibleComponents } from '../../stores/visibilityStore';

    export let id; // Identificação única para este componente
    let isVisible = false;

    $: isVisible = $visibleComponents.has(id);

    const skills = [
        {
            image: 'typescript.svg',
            alt: 'TypeScript',
            since: '2022'
        },
        {
            image: 'javascript_logo.webp',
            alt: 'JavaScript',
            since: '2022'
        },
        {
            image: 'vuejs.webp',
            alt: 'Vue',
            since: '2022'
        },
        {
            image: 'react.svg',
            alt: 'React',
            since: '2022'
        },
        {
            image: 'svelte_logo.webp',
            alt: 'Svelte',
            since: '2025'
        },
        {
            image: 'native.png',
            alt: 'React Native',
            since: '2025'
        },

    ]
    
    const seniority = (startParam) => {
        const actualDate = new Date()
        const start = new Date(startParam)

        return actualDate.getFullYear() - start.getFullYear()
    }

    const filledStars = (years) => {
       return Array.from({length: 5}, (_, i) => i < years)
    }
    
</script>

<section id={id} class="skills" class:visible={isVisible} use:observeVisibility={{ id }}>
    <div class="container skills__content">
        <h2 class="skills__title">Skills</h2>
        <div class="skills__itens">
            {#each skills as item}
                <div class="skills__item">
                    <div class="skills__first">
                        {#if item?.image}
                            <img class="skills__logo" src={`src/assets/icon/${item.image}`} alt={item.alt} height="32"/>
                        {/if}
                        {#if item?.alt}
                            <span class="skills__name">{item.alt}</span>
                        {/if}
                    </div>
                    <div class="skills__senior">
                        <div class="skills__stars-content">
                            {#each filledStars(seniority(item.since)) as star}
                                <div  class="skills__stars {star ? 'skills__stars-filled' : ''}">★</div>
                            {/each}
                        </div>
                        
                        <span class="skills__senior-years">
                            {seniority(item.since)} {seniority(item.since) > 1 ? 'years' : 'year'}
                        </span>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss" scoped>
.skills{
    margin: 40px 0;
    width: 100%;
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &__itens {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 24px;
        justify-content: center;
        align-items: center;
    }
    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 14px;
        scale: 1;
        transition: all 0.5s ease-in-out;
        width: 100%;
        &:hover{
            transform: scale(1.03);
            transition: all 0.5s ease-in-out;
            background-color: rgba(135, 123, 111, 0.2);
        }
    }
    &__first{
        display: flex;
        align-items: center;
    }
    &__logo{
        height: 32px;
        width: 32px;
        margin-right: 12px;
    }
    &__senior{
        display: flex;
        flex-direction: column;
        text-align: right;
    }
    &__stars-content {
        display: flex;
        align-items: center;
    }
    &__stars{
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.2);
    }
    &__stars-filled{
        color: #6a4848;
    }
    &__senior-years{
        font-size: 0.8rem;
        font-style: italic;
    }
}
@media(min-width: 1024px){
    .skills{
        margin: 60px 0;
    }
}
</style>