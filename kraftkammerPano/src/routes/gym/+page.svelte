<!-- GymDetails.svelte -->
<script lang="ts">
    import type { Gym } from '../../types/gym'; 
    
   import data from '../../resources/data.json';
   let gymData: Gym=data; 
   let currentLanguage="en";
    
    const formatDate = (date: string) => {
        return new Date(date).toLocaleString();
    };
    
    let isEnglish = true;
    
    function toggleLanguage() {
        isEnglish = !isEnglish;
        currentLanguage=isEnglish ? 'en' : 'de';
    }
</script>

<style>
    /* Add your CSS styles for beautification here */
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
    }
    
    h1 {
        font-size: 24px;
        margin-bottom: 15px;
    }
    
    ul {
        list-style: none;
        padding: 0;
    }
    
    li {
        margin-bottom: 10px;
    }
    
    .toggle-btn {
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 8px 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    .toggle-btn:hover {
        background-color: #0056b3;
    }
</style>

<div class="container">
    <h1>{gymData.locale[currentLanguage].header}</h1>
    <h2>{gymData.locale[currentLanguage].subHeader}</h2>
    <button class="toggle-btn" on:click={toggleLanguage}>Toggle Language</button>
    <ul>
        <li>Dates: {gymData.dates.map(date => formatDate(date)).join(', ')}</li>
        <li>Duration: {gymData.duration} {gymData.durationUnits}</li>
        <li>Location: {gymData.locale[currentLanguage].location}</li>
        <li>Fee Per Semester : {gymData.locale[currentLanguage].feePerSemesterText}</li>
        <li>Card Deposit : {gymData.locale[currentLanguage].cardDepositText}</li>
        <li>Info Text : {gymData.locale[currentLanguage].infoText}</li>
        <li>Questions Text : {gymData.locale[currentLanguage].questionsText}</li>
        <li>Fee Per Semester: {gymData.feePerSemester} {gymData.currency}</li>
        <li>Card Deposit: {gymData.cardDeposit} {gymData.currency}</li>
    </ul>
</div>
