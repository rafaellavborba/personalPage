<script>
    import EducationComponent from "./EducationComponent.svelte";
    import ExperienceComponent from "./ExperienceComponent.svelte";

    import { observeVisibility } from '../../actions/observeVisibility';
    import { visibleComponents } from '../../stores/visibilityStore';

    export let id; 
    let isVisible = false;

    $: isVisible = $visibleComponents.has(id);

</script>

<section id={id} class="about" class:visible={isVisible} use:observeVisibility={{ id }}>
    <div class="container about__content">
       <ExperienceComponent />
    </div>
</section>

<style lang="scss" scoped>
.about{
    height:auto;
    width: 100%;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    transition: all ease-in-out 0.3s;
    transform: scale(1);
    opacity: 0.5;
    &__content {
        height: fit-content;
    }
}
.about.visible{
    transform: scale(1.02);
    transition: all ease-in-out 0.5s;
    opacity: 1;
}
@media (min-width: 1024px){
   .about{
        margin: 60px 0;
   }
}
</style>