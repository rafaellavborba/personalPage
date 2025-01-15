<script>
    import { observeVisibility } from '../../actions/observeVisibility';
    import { visibleComponents } from '../../stores/visibilityStore';

    export let id; 
    let isVisible = false;

    $: isVisible = $visibleComponents.has(id);
    const edu = [
        {
            name: 'Machine Learning Engineering',
            degree: 'Postgraduate Degree',
        },
        {
            name: 'Fullstack Web Development',
            degree: 'Postgraduate Degree',
        },
        
        {
            name: 'Analysis and Systems Development',
            degree: 'Degree',
        },
        {
            name: 'International Trade',
            degree: 'Degree',
        },
    ]
</script>

<section id={id} class="education" class:visible={isVisible} use:observeVisibility={{ id }}>
    <div class="container">
        <h2 class="education__title">Education</h2>
        <div class="education__content">
            {#each edu as item}
                <div class="education__item">
                    <img class="education__icon" src="src/assets/icon/education.png" alt="Education">
                    {#if item.name}
                        <span  class="education__item-title">{item.name}</span>
                    {/if}
                    {#if item.degree}
                        <span class="education__item-degree">{item.degree}</span>  
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss" scoped>
.education {
    margin: 40px 0;
    transition: all ease-in-out 0.3s;
    transform: scale(1);
    opacity: 0.5;
    background-color: #E0CFC7;
    padding: 40px 0;
    &__content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    &__title {
        margin-top: 0;
        text-align: center;
    }
    &__item{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 22px;
        background-color: #CDB9B2;
        max-width: 150px;
        width: 100%;
        height: 150px;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
        margin-bottom: 14px;
        scale: 1;
        transition: all 0.3s ease-in-out;
        &:hover{
            transform: scale(1.02);
            transition: all 0.3 ease-in-out; 
        }
        
    }
    &__icon{
        height: 32px;
        width: 32px;
    }
    &__item-title {
        font-weight: bold;
        margin: 14px 0;
        width: fit-content;
    }
    &__item-degree{
        font-size: 0.8rem;
        text-align: left;
        width: 100%;
    }
}
.education.visible{
    transform: scale(1.02);
    transition: all ease-in-out 0.5s;
    opacity: 1;
}
@media (min-width: 768px){
    .education {
        &__content {
            flex-direction: row;
        }
        &__item {
            max-width: 150px;
            height: 150px;
        }
        &__item-degree{
            font-size: 1rem;
        }
    }
}
@media (min-width: 1024px){
    .education{
        margin: 60px 0;
        &__item {
            padding: 60px;
        }
    }
}
</style>