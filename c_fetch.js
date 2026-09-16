async function getProfile(username) {
    const res = await fetch(
        `https://api.github.com/users/${username}`
    );

    const data = await res.json();

    console.log(`ชื่อ: ${data.name}`);
    console.log(`repo สาธารณะ: ${data.public_repos} อัน`);
    console.log(`สมัครเมื่อ: ${data.created_at}`);
}

getProfile("PanjaratSampa");