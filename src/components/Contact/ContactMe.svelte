<script>
    import { observeVisibility } from '../../actions/observeVisibility';
    import { visibleComponents } from '../../stores/visibilityStore';

    export let id; 
    let isVisible = false;

    $: isVisible = $visibleComponents.has(id);
    
    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    const socials = [
        {
            alt: 'Linkedin',
            src: 'linkedin.png',
            href: 'https://www.linkedin.com/in/rafaella-borba/'
        },
        {
            alt: 'Github',
            src: 'github.svg',
            href: 'https://github.com/rafaellavborba'
        },
        {
            alt: 'Whatsapp',
            src: 'whatsapp.png',
            href: 'https://wa.me/5516992588701?text=Olá!%20Gostaria%20de%20mais%20informações.'
        },
        {
            alt: 'E-mail',
            src: 'e-mail.png',
            href: 'mailto:rafaellavborba@gmail.com'
        },
        {
            alt: 'Smartphone',
            src: 'smartphone.png',
            href: 'tel:+5516992588701'
        }
    ]
</script>

<section id={id} class="contact" class:visible={isVisible} use:observeVisibility={{ id }}>
    <div class="container">
        <div class="contact__first">
            <button on:click={() => scrollToSection('home')} aria-label="Back to start" class="contact__button-home">
                <img src="src/assets/images/logo.png" alt="Logo" height="62" class="contact__logo">
            </button>
            <div class="contact__socials">
                {#each socials as item}
                    {#if item?.src}
                        <a href={item.href} target="_blank" rel="noopener" aria-label={item.alt} class="contact__item">
                            <img src={'src/assets/icon/' + item.src} alt={item.alt} height="38" >  
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="scss" scoped>
.contact {
    background-color: #E0CFC7;

    &__first{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        margin: 40px 0;
    }
    &__button-home{
        margin: 0;
        border: none;
        padding: 0;
        height: 75px;
        width: fit-content;
    }
    &__logo {
        height: 75px;
        width: 75px;
    }
    &__socials {
        display: flex;
        margin-top: 14px;
    }
    &__item {
        margin-right: 14px;

        &:last-child {
            margin-right: 0;
        }
    }
}
.contact.visible{
    transform: scale(1.02);
    transition: all ease-in-out 0.5s;
    opacity: 1;
}
@media(min-width: 768px){
    .contact {
        &__first {
            flex-direction: row;
        }
    }
}
</style>