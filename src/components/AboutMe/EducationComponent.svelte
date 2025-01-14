<script>
    import { observeVisibility } from '../../actions/observeVisibility';
    import { visibleComponents } from '../../stores/visibilityStore';

    export let id; 
    let isVisible = false;

    $: isVisible = $visibleComponents.has(id);

</script>

<section id={id} class="education" class:visible={isVisible} use:observeVisibility={{ id }}>
EDUCATION
</section>

<style lang="scss" scoped>
.education.visible{
    transform: scale(1.02);
    transition: all ease-in-out 0.5s;
    opacity: 1;
}
</style>