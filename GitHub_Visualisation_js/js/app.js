function mainFunction() {
    getUserInformation();
    getReposByYear();
    getLanguages();
    getCommitsByYear();
}

const user_url = 'https://api.github.com/users/andrew'
async function getJsonData(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
}

async function getRepoData() {
    const url = 'https://api.github.com/users/andrew/repos';
    let data = await getJsonData(url);
    return data;
}

async function getUserInformation() {
    let userData = await getJsonData(user_url);

    let img = document.getElementById('img');
    img.src = userData.avatar_url

    let name = document.getElementById('name');
    name.innerHTML = `Name: ${userData.name}`;

    let followers = document.getElementById('followers');
    followers.innerHTML = `Followers : ${userData.followers}`;

    let following = document.getElementById('following');
    following.innerHTML = `Following : ${userData.following}`;

    let public_gists = document.getElementById('public_gists');
    public_gists.innerHTML = `Public Gists : ${userData.public_gists}`;

    let public_repos = document.getElementById('public_repos');
    public_repos.innerHTML = `Public Repos : ${userData.public_repos}`;

    let created_at = document.getElementById('created_at');
    created_at.innerHTML = `Created at : ${userData.created_at}`;
}

async function getLanguages() {
    let labels = [];
    let data = [];
    let colours = [];

    const repo = await getRepoData();

    for (i in repo) {
        let repoName = repo[i].name;
        let lan_url = `https://api.github.com/repos/andrew/${repoName}/languages`;
        let languages_used = await getJsonData(lan_url);

        for (language in languages_used) {
            if (labels.includes(language)) {
                var i = labels.indexOf(language);
                data[i] = data[i] + languages_used[language];
            }
            else {
                labels.push(language);
                data.push(languages_used[language]);
                colours.push(`rgba(${Math.floor(Math.random() * (256 - 0) + 0)}, ${Math.floor(Math.random() * (256 - 0) + 0)}, ${Math.floor(Math.random() * (256 - 0) + 0)}, 0.2)`);
            }
        }
    }
    pieChart(labels, data, colours);
}

async function getCommitsByYear() {

    let data = [];
    let labels = [];
    let colours = [];

    const repos = await getRepoData();

    for (i in repos) {
        let repoName = repos[i].name;
        let commit_url = `https://api.github.com/repos/andrew/${repoName}/commits`;
        let commits = await getJsonData(commit_url);

        for (commit in commits) {
            let dateOfCommit = commits[commit].commit.author.date;
            let d = new Date(dateOfCommit);
            let year = d.getFullYear();


            if (labels.includes(year)) {
                var i = labels.indexOf(year);
                data[i] = data[i] + 1;
            }
            else {
                labels.push(year);
                data.push(1);
                colours.push(`rgba(${Math.floor(Math.random() * (256 - 0) + 0)}, ${Math.floor(Math.random() * (256 - 0) + 0)}, ${Math.floor(Math.random() * (256 - 0) + 0)}, 0.2)`);
            }
        }
    }
    labels.sort();
    barGraph(labels, data, colours);
}

async function getReposByYear() {
    let data = [];
    let labels = [];
    let colours = [];

    const repos = await getRepoData();

    for (i in repos) {
        let date_create = repos[i].created_at;
        let d = new Date(date_create);
        let year = d.getFullYear();

        if (labels.includes(year)) {
            var i = labels.indexOf(year);
            data[i] = data[i] + 1;
        }
        else {
            labels.push(year);
            data.push(1);
            colours.push(`rgba(${Math.floor(Math.random() * (256 - 0) + 0)}, ${Math.floor(Math.random() * (256 - 0) + 0)}, ${Math.floor(Math.random() * (256 - 0) + 0)}, 0.2)`);
        }
    }

    labels.sort();

    barGraph2(labels, data, colours);
}

async function barGraph(labels, data, colours) {

    const ctx = document.getElementById('commits').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: labels,
                data: data,
                backgroundColor: colours,
                borderColor: '#777',
                borderWidth: 1
            }]
        },
        options: {
            title: {
                text: 'Commits By Each Year',
                display: true,
                fontSize: 20
            },
            legend: {
                display: false
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

async function barGraph2(labels, data, colours) {

    const ctx = document.getElementById('repo').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: labels,
                data: data,
                backgroundColor: colours,
                borderColor: '#777',
                borderWidth: 1
            }]
        },
        options: {
            title: {
                text: 'Repositries By Each Year',
                display: true,
                fontSize: 20
            },
            legend: {
                display: false
            },
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}


async function pieChart(labels, data, colours) {

    const ctx = document.getElementById('language').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Languages',
                data: data,
                backgroundColor: colours,
                borderColor: '#777',
                borderWidth: 1
            }]
        },
        options: {
            title: {
                text: 'Languages',
                display: true,
                fontSize: 20
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

