function sendMail(){
    let parms ={
        name : document.getElementById("name").Value,  
        email : document.getElementById("email").value,
        mobile No. : document.getElementById("mobile no.").value,
        referal code : document.getElementById("referal code").value,
        password : document.getElementById("password").value,
    }

    emailjs.send("service_khwncsw","template_otwjike",parms).then(alert("Email Sent!!!"))
}


        // Sample data array
        const data = [
            { name: "Hero Panti", link: "file:///C:/Users/samar/Videos/movie%20code.html" },
            { name: 'Main Tera Hero', link: 'file:///C:/Users/samar/Documents/project%20meterial.mp4' },
            { name: 'M.S Dhoni (The Untold Story)', link: 'file:///C:/Users/samar/Documents/DATA/MS_Dhoni_The_Untold_Story_2016_Hindi_Full_Movie_BluRay.mp4' },
            { name: 'Dhadak', link: 'file:///C:/Users/samar/Documents/DATA/Dhadak_2018_Hindi_Full_Movie_HDRip.mp4'},
            { name: 'PK' , link: 'file:///C:/Users/samar/Documents/DATA/PK_2014_Hindi_Full_Movie_BluRay.mp4'},
            { name: 'Humty Sharma Ki Dulhaniya' , link: 'file:///C:/Users/samar/Documents/DATA/Humpty_Sharma_Ki_Dulhania_(2014)_Hindi_Movie_BlueRay_HD_720p%20(9xmovies.Gift).mp4'},
            { name: 'Ishqzaade' , link: 'file:///C:/Users/samar/Documents/DATA/sFilmywap_-Ishaqzaade(2012)Bollywood_Hindi_Movie_480p(sFilmywap.Me).mp4'},
            { name: 'Yaariyan' , link: 'file:///C:/Users/samar/Documents/DATA/MFilmywap_-Yaariyan(2014)Bollywood_Hindi_Movie_480p(mFilmywap.in).mp4'},
            { name: 'Mr. & Mrs. Mahi', link: 'file:///C:/Users/samar/sam%20portfolio/mahi.html'},
            { name: 'kalki', link: 'file:///C:/Users/samar/sam%20portfolio/kalki.html'},
            { name: 'thukra ke mera pyaar', link: 'file:///C:/Users/samar/sam%20portfolio/web.html'},
            { name: 'uunchai', link: 'file:///C:/Users/samar/Downloads/Uunchai_2022_Hindi_Full_Movie_HQ_HDRip_720p.mp4'}
        ];

        function searchData() {
            let query = document.getElementById('searchBox').value.toLowerCase();
            let results = document.getElementById('results');
            let resultContainer = document.getElementById('resultContainer');
            
            // Clear previous results
            results.innerHTML = '';

            // Filter data based on the search query
            let filteredData = data.filter(item => item.name.toLowerCase().includes(query));
            
            // Display the results
            if (filteredData.length > 0) {
                resultContainer.style.display = 'block';
                filteredData.forEach(item => {
                    // Create a link for each result
                    let div = document.createElement('div');
                    div.classList.add('resultItem');
                    
                    // Create the anchor element for the link
                    let link = document.createElement('a');
                    link.href = item.link;  // Set the link URL
                    link.textContent = item.name;  // Set the link text
                    link.target = '_blank';  // Open link in a new tab

                    // Append the link to the div
                    div.appendChild(link);

                    // Append the div to the results container
                    results.appendChild(div);
                });
            } else {
                resultContainer.style.display = 'none'; // Hide if no results
            }
        }