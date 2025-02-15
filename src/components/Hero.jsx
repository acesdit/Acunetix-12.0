import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-full flex items-center justify-center h-screen">
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                <source src="https://rr6---sn-ci5gup-cvhe7.googlevideo.com/videoplayback?expire=1739663611&ei=m9SwZ4XSMLTX6dsPjqTOsQ8&ip=176.6.131.71&id=o-AO3YIrh0MYh9VMnfuR57zXru4hBrSncANmmhnVHeV0yr&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AUWDL3xiriv3sWl7eYbfczAzbmLRgfd3TzdrpbYJq_rljwULbEuS4hw1OHWgRWfhRY0FTNWRB2w-OHcg&spc=RjZbSXNpIziP11WbyP-xklvNycfiWUpjp0E9IspBf9Qvh-odgA&vprv=1&svpuc=1&mime=video%2Fwebm&ns=7emx3BPPcZhmNrC7mdoGUbwQ&rqh=1&gir=yes&clen=14059239646&dur=6383.920&lmt=1726328763826567&keepalive=yes&fexp=24350590,24350737,24350827,24350961,24350977,24350978,24351082,24351092,24351132,24351184,51326932,51355912&c=WEB&sefc=1&txp=5432434&n=v9Kja8HNnjLTxg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAKJ0EYzT-kCyeel2dGdV9bOqsWndLCOv7VPJ5U5vBKeXAiBYkHa4SsfaOWRauYszMULSakE5PJoLLrQ593M5zsCgIg%3D%3D&pot=MnScXCwrhRpjbJxg9nXolH8UnUrrzfveH6Wg8HcU4V5D_AzmezedFHRoaRR3qk7xI7fvEa-40RSmK6B_MFNzRIl8PPsB72VomU43LkQ5vry6gw5fRmT8C1y2JNuGgLiab33Pq0sksj4zDJg4cQvZLH_9wk1KAQ==&rm=sn-uxax4vopj5qx-cxgl7k,sn-4g5erz7z&rrc=79,104&req_id=a59feb9de09ca3ee&rms=rdu,au&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1739651048,&mh=Hx&mip=2401:4900:57bd:a5f5:8cb4:53d0:61b3:9e69&mm=29&mn=sn-ci5gup-cvhe7&ms=rdu&mt=1739650617&mv=m&mvi=6&pl=45&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgWjUu_cr7ypstesvP54tpoz5I5jSp53OGS0R3aD9fSQkCIDFeHGRJUSV6PpcsZ1zukiyLgGQnqAiAsMQlSN0IJYPp" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 text-center text-white" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                <h1 className="text-4xl md:text-8xl font-bold">Acunetix 12.0</h1>
                <p className='text-lg md:text-2xl md:h-12 pt-4'>Dive into world of illusions</p>
            </div>
        </div>
    );
};

export default Hero;