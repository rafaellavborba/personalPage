<script>
    import BannerMain from "./Banner/BannerMain.svelte";
    import ContactMe from "./Contact/ContactMe.svelte";
    import ProfileComponent from "./ProfileComponent.svelte";
    import SkillsComponent from "./AboutMe/SkillsComponent.svelte";
    import ExperienceComponent from './AboutMe/ExperienceComponent.svelte'
    import EducationComponent from "./AboutMe/EducationComponent.svelte";
</script>

<main class="mc">
    <BannerMain id="home"/>
    <ProfileComponent id="about" />
    <ExperienceComponent id="career"/>
    <EducationComponent id="education"/>
    <SkillsComponent id="skills" />
    <ContactMe id="contact"/>
</main>

<style lang="scss" scoped>
.mc{
    height: 100vh;
    width: 100%;
}
</style>