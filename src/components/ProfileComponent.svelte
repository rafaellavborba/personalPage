<script>
    import { observeVisibility } from '../actions/observeVisibility';
    import { visibleComponents } from '../stores/visibilityStore';

    export let id; // Identificação única para este componente
    let isVisible = false;

    $: isVisible = $visibleComponents.has(id);

</script>

<section id={id} class="profile" class:visible={isVisible} use:observeVisibility={{ id }}>
    <div class="container profile__content">
        <div class="profile__text-content">
            <h1>Rafaella Borba</h1>
            <p>Hello there! <br>
                I'm Rafaella Borba, a passionate developer blending creativity and technology to craft seamless web and mobile experiences.
    
                I hold a degree in Systems Analysis and Development, a postgraduate specialization in Full Stack Web Development, and I'm currently diving deep into the fascinating world of Machine Learning Engineering through advanced studies.
                
                Based in Ribeirão Preto, São Paulo, Brazil, I thrive in the dynamic realm of frontend development, where design meets functionality. Whether it's a sleek web interface or a responsive mobile application, I aim to create intuitive and engaging solutions that resonate with users.
                
                Let’s build something amazing together! 
            </p>
        </div>
        <div class="profile__image-content">
            <img src="src/assets/images/profile_image.jpeg" alt="Profile Image" class="profile__image-one" width="300">
            <img src="src/assets/images/profile_image_2.jpeg" alt="Profile Image" class="profile__image-two" height="200">
            <img src="src/assets/images/profile_image_3.jpeg" alt="Profile Image" class="profile__image-three" width="200"/>
        </div>
        
    </div>
</section>

<style lang="scss" scoped>
.profile{
    height: auto;
    width: 100%;
    margin: 40px 0;
    transition: all ease-in-out 0.3s;
    transform: scale(1);
    opacity: 0.5;
    &__content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
    &__text-content{
        width: 100%;
    }
    &__image-content{ 
        width: 100%;
        min-height: 145px;
        display: flex;
        flex-direction: column;
    }
    &__image-one{
        height: fit-content;
        width: 100%;
        
    }
    &__image-two, &__image-three{
        display: none;
    }
}
.profile.visible{
    transform: scale(1.02);
    transition: all ease-in-out 0.5s;
    opacity: 1;
}
@media (min-width: 1024px){
    .profile{
        margin: 60px 0;
        &__content{
            flex-direction: row;
        }
        &__text-content {
            width: 50%;
        }
        &__image-content{
            width: 40%;
            position: relative;
        }
        &__image-one, &__image-two, &__image-three{
            cursor: pointer;
            display: block;
            position: absolute;
            border: 5px solid #CDB9B2;
            z-index: 1;
            transition: transform 0.3s ease-in;
            scale: (1);
            &:hover{
                z-index: 2;
                transform: scale(1.02);
            }
        }
        &__image-one{
            top: -80px;
            right: 100px;
            width: 300px;
            height: fit-content;
        }
        &__image-two{
            right: 0;
            top: 40px;
        }
        &__image-three{
            top: 150px;
            right: 180px;

        }
    }
}
</style>