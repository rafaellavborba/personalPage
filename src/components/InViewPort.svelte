<script>
    import { observeVisibility } from '../actions/observeVisibility';
    import { visibleComponents } from '../stores/visibilityStore';

    export let id;
    let isVisible = false;

    $: isVisible = $visibleComponents.has(id);

</script>
  