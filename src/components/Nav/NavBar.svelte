<script>
    const sections = [
        { name: "About", id: "about" },
        {name: 'Career', id: 'career'},
        { name: "Contact", id: "contact" },
    ];

    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>
<nav class="navbar">
    <button class="navbar__nav-button" on:click={() => scrollToSection('home')}>
        <img src="src/assets/images/logo.png" alt="Logo" class="navbar__image">
    </button>
    <div class="navbar__content">
        {#each sections as section}
            <button class="navbar__nav-link" on:click={() => scrollToSection(section.id)}>
                {section.name}
            </button>
        
        {/each}
    </div>

</nav>

<style lang="scss" scoped>
.navbar{
    background-color: transparent;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &__image{
        height: 60px;
        width: 60px;
    }
    &__content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__nav-button{
        border: none;
        background-color: transparent;
        padding: 0;
    }
    &__nav-link{
        background-color: transparent;
        border: none;
        font-size: 0.9rem;
        line-height: 2rem;
        letter-spacing: 1px;
        min-width: 60px;
    }
}
@media(min-width: 375px){
    .navbar{
        &__nav-link{
            min-width: 80px;
        }
    }
}
@media(min-width: 425px){
    .navbar{
        &__content {
            max-width: 80%;
            justify-content: space-between;
        }
    }
}
@media (min-width: 500px){
    .navbar{
        justify-content: flex-end;
        &__content {
            max-width: 70%;
        }
        &__nav-button {
            position: absolute;
            left: 20px;
        }
        &__nav-link{
            font-size: 1.2rem;
        }
    }
}
@media (min-width: 768px){
    .navbar{
        &__image{
            height: 120px;
            width: 120px;
        } 
       
    }
}
@media (min-width: 1024px){
    .navbar{
        justify-content: space-evenly;
        padding: 60px 0;
        &__content {
            max-width: 60%;
        }
        &__nav-button {
            left: 60px;
        }
        &__nav-link{
            font-size: 1.4rem;
        }
    }
}
</style>