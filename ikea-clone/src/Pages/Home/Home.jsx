import React, { useEffect, useState } from 'react'
import Contentcard from './Contentcard'
import Imagecards from './Imagecards'
import InstaCard from './InstaCard';
import ProductCard from './ProductCard'
import './Home.css'
function Home() {
    const [state, setState] = useState([]);
    const [index, setIndex] = useState(1);
    const [loading, setLoading] = useState(true);
    const getImage = async () => {
        let res = await fetch(`https://rec.ingka.com/insp/feed-in-prod/inspirations/en/?startIndex=${index}&maxResults=12&visualUgc=true&id=ga:2034981772.1675526156&requestId=65142933-8926-471d-ae59-c1921cc2d3ef`)
        let data = await res.json();
        // console.log(data.data.items);
        setState([...state, ...data.data.items])
        setLoading(false);

    }

    useEffect(() => {
        getImage();
    }, [index])
    // console.log(state);
    return (
        <div style={{ margin: '20px' }}>

            <div className='d-flex'>
                <div className='col-6 text-center' >
                    <img src="https://www.ikea.com/images/01/38/01380295769f06cd347e386777678534.jpg?f=xl" alt="" width='90%' />
                </div>
                <div className='col-6 d-flex' >
                    <div className='w-50 ' >
                        <img src="https://www.ikea.com/images/40/76/4076b7e717abcb0007b078dde53ed903.jpg?f=xs" alt="" width='100%' style={{ padding: '0px 10px 10px 0px ' }} />
                        <img src="https://www.ikea.com/images/9e/7d/9e7dce330761db88f911ad45b6075de1.png?f=xs" alt="" width='96%' style={{ height: '58% ' }} />
                    </div>
                    <div className='w-50'>
                        <img src="https://www.ikea.com/images/ff/0a/ff0ae9a5351d684f496b10260b82b749.jpg?f=xs" alt="" width='100%' style={{ padding: '0px 0px 10px 10px ' }} />
                        <img src="https://www.ikea.com/images/38/62/386242f18ea847ac0f57aff6a34019fc.jpg?f=xs" alt="" width='100%' style={{ height: '44% ', }} />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <hr />
            </div>
            <div>
                <h1 className='mb-5'>Categories for better storage and organisation</h1>
                <div className='d-flex' style={{ overflow: 'auto', overflowY: 'hidden', scrollBehavior: 'smooth' }} >
                    <Imagecards image={'https://www.ikea.com/images/66/a7/66a7ad4f93664a50fa386f545860a313.jpg?f=xs'} name={'Hook & wall organisation from Rs.75'} />
                    <Imagecards image={'https://www.ikea.com/images/50/e9/50e95854f19088058cc930d33913e285.jpg?f=xs'} name={'Shoe boxes & organisers from Rs.49'} />
                    <Imagecards image={'https://www.ikea.com/images/7d/6b/7d6b63203c8e2ddaa5da559889004299.jpg?f=xs'} name={'Clothes organisers from Rs.49'} />
                    <Imagecards image={'https://www.ikea.com/images/29/e2/29e200bea35809affce65080b33e8632.jpg?f=xs'} name={'Kitchen organisers from Rs.39'} />
                    <Imagecards image={'https://www.ikea.com/images/c7/85/c7853e88497ae33a463af264e2638233.jpg?f=xs'} name={'Food storage & organise from Rs.19'} />
                    <Imagecards image={'https://www.ikea.com/images/12/7b/127b63b070df8db01ae9b26bf9eb2a8f.jpg?f=xs'} name={'Storage boxes & baskets from Rs.19'} />
                    <Imagecards image={'https://www.ikea.com/images/4e/a9/4ea92836239c90b4ca8c40409a639cc8.jpg?f=xs'} name={'Wall shelves from Rs.299'} />
                    <Imagecards image={'https://www.ikea.com/images/8c/13/8c13033770991ef467371a52fbf56c3c.jpg?f=xs'} name={'Trolleys from Rs.949'} />
                </div>
            </div>
            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <hr />
            </div>
            <div className='d-flex' style={{ overflow: 'auto', overflowY: 'hidden', scrollBehavior: 'smooth' }}>
                <Contentcard image={'https://www.ikea.com/images/4c/9c/4c9c38d8fd3e45c4b19c19249a35dfc3.jpg?f=s'} title={'Welcome to my organised home!'} text={'Organise like a pro with our storage solutions'} color={'#EFDBBD'} />
                <Contentcard image={'https://www.ikea.com/images/c7/2d/c72d847045b316de7e0aa08fabbad2d4.jpg?f=s'} title={'Live from IKEA'} text={'Join us to learn the best lighting solutions for your space. '} color={'#E3A79A'} />
                <Contentcard image={'https://www.ikea.com/images/44/61/4461117f5cdeacb9ec80d3432a7e4acb.jpg?f=s'} title={`Ideas for valentine's day`} text={`Go beyond dinner and flowers with these fresh, fun Valentine's Day ideas`} color={'#870432'} textColor={'white'} />
                <Contentcard image={'https://www.ikea.com/images/fc/ad/fcad35097f8108f3bfba8a06bad32ec0.jpg?f=s'} title={`Exam preparation `} text={`Carve out a better studying oasis so your child can focus more.`} color={'#E1C2DA'} />
                <Contentcard image={'https://www.ikea.com/images/67/fb/67fb74157dddf922d5afddc8f946026e.png?f=s'} title={`Made in India`} text={`Explore our range of Made in India products`} color={'#3E543F'} textColor={'white'} />
                <Contentcard image={'https://www.ikea.com/images/fa/88/fa88c91a4ac8db60f44b50cce69166b8.jpg?f=s'} title={`Affordable living room sets starting at Rs.28,979`} text={`Make this multifunctional space that meets all your needs without breaking the bank.`} color={'#AD9369'} />
                <Contentcard image={'https://www.ikea.com/images/f0/03/f00385ea5df6e9f7b9da5a9c4c0c54b2.jpg?f=s'} title={`Last chance to buy`} text={`These products will be out of the range soon.`} color={'#21315E'} textColor={'white'} />
                <Contentcard image={'https://www.ikea.com/images/b1/bf/b1bff79e991818ed4ac42b0364b9a977.png?f=s'} title={`Furniture under Rs.2999`} text={`Affordable furniture to create a space of your own`} color={'#591745'} textColor={'white'} />
                <Contentcard image={'https://www.ikea.com/images/df/ef/dfef7c3f8054fb611e01cc62f5dbb318.jpg?f=s'} title={`Affordable bedroom sets starting at Rs.14,990`} text={`Why not match your bed to other furniture in the room for a cohesive look?`} color={'#234031'} textColor={'white'} />
                <Contentcard image={'https://www.ikea.com/images/98/94/98948836271b7eeaf356648d74a28a80.jpg?f=s'} title={`Our lowest price`} text={`Shop our lowest price products`} color={'#FFDB00'} />
            </div>

            <div style={{ marginTop: '7%' }}>
                <h4 className='mb-5'>IKEA family offers</h4>
                <div className='d-flex'>
                    <div className='col-6 text-center' >
                        <img src="https://www.ikea.com/ext/ingkadam/m/3fcb663658fe5ad4/original/PH190396.jpg?f=xl" alt="" width='90%' />
                    </div>
                    <div className='col-6 d-flex' >
                        <div className='w-50 ' >
                            <img src="https://www.ikea.com/images/6d/4f/6d4f5a552b6f6fbb3ff973d7b8f8f451.png?f=xs" alt="" width='100%' style={{ padding: '0px 10px 10px 0px ' }} />
                            <img src="https://www.ikea.com/ext/ingkadam/m/818fa8d3f788ef7/original/PH179240.jpg?f=xs" alt="" width='96%' style={{ height: '53% ' }} />
                        </div>
                        <div className='w-50'>
                            <img src="https://www.ikea.com/ext/ingkadam/m/3282b468aac27adb/original/PH182771.jpg?f=xs" alt="" width='100%' style={{ padding: '0px 0px 10px 10px ' }} />
                            <img src="https://www.ikea.com/ext/ingkadam/m/3c9dcc67e4ba0414/original/PH161322-crop001.jpg?f=xs" alt="" width='100%' style={{ height: '41% ', }} />
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <hr />
            </div>
            <div style={{ marginTop: '7%' }}>
                <h4 className='mb-5'>NEW at IKEA</h4>
                <div className='d-md-flex justify-content-around col-12 sm-d-block'  >
                    <ProductCard image={'https://www.ikea.com/in/en/images/products/uppraemen-storage-basket-grey-green__1112588_pe871224_s5.jpg?f=m'} name={'UPPRÄMEN'} price={'1,990'} />
                    <ProductCard image={'https://www.ikea.com/in/en/images/products/lerflundra-food-protector-green__1154565_pe886193_s5.jpg?f=xxs'} name={'LERFLUNDRA '} price={'549'} />
                    <ProductCard image={'https://www.ikea.com/in/en/images/products/nissafors-trolley-pale-green__1134480_pe878794_s5.jpg?f=s'} name={'NISSAFORS'} price={'2,990'} />
                    <ProductCard image={'https://www.ikea.com/in/en/images/products/molnart-led-bulb-e27-100-lumen-globe-black-clear-glass__1011619_pe828512_s5.jpg?f=s'} name={'MOLNART'} price={'1,490'} />

                </div>
            </div>
            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <hr />
            </div>
            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <h4 style={{ marginBottom: '5%' }}>Top furniture categories</h4>
                <div className='d-flex' style={{ overflow: 'auto', overflowY: 'hidden', scrollBehavior: 'smooth' }} >
                    <Imagecards image={'https://www.ikea.com/images/sofa-and-armchairs-8c6cd2d72c5b7ffa6c50de384c9a74c8.jpg?f=xs'} name={'Sofas & armchairs'} />
                    <Imagecards image={'https://www.ikea.com/images/ec/6d/ec6d3a24e13d4e6bf9af8461ac082044.jpg?f=xs'} name={'Storage & organisation'} />
                    <Imagecards image={'https://www.ikea.com/images/beds-c444b5a3ed3563bf37b741a0d8ce6c97.jpg?f=xs'} name={'Beds and mattresses'} />
                    <Imagecards image={'https://www.ikea.com/images/75/9f/759fc4bd0f1a2c7af564ccde5755e5fd.jpg?f=xs'} name={`Children's storage & furniture`} />
                    <Imagecards image={'https://www.ikea.com/images/fb/98/fb98ddb584696abe4e696bc7993408e6.jpg?f=xs'} name={'Home office'} />
                    <Imagecards image={'https://www.ikea.com/images/d7/4e/d74e72bbf58f2fea3c75f8478e943c07.jpg?f=xs'} name={'Bathroom storage'} />
                    <Imagecards image={'https://www.ikea.com/images/67/71/67713b64c75fbe5851c2756c2fa95db0.jpg?f=xs'} name={'Dining sets'} />
                    <Imagecards image={'https://www.ikea.com/images/2d/6b/2d6b918803728f28cb6263202f51596c.jpg?f=xs'} name={'Kitchen storage & furniture'} />
                    <Imagecards image={'https://www.ikea.com/images/59/66/59669cf5cbd26afe97eb35d05022e31a.jpg?f=xs'} name={'Balcony & garden'} />

                </div>
            </div>
            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <h4 style={{ marginBottom: '5%' }}>Top accessories categories</h4>
                <div className='d-flex' style={{ overflow: 'auto', overflowY: 'hidden', scrollBehavior: 'smooth' }} >
                    <Imagecards image={'https://www.ikea.com/images/49/3e/493e241188d879a0eb919f7423a10393.jpg?f=xs'} name={'Laundry & cleaning'} />
                    <Imagecards image={'https://www.ikea.com/images/ee/ee/eeee94f35b3e63d365ef79f452f70031.jpg?f=xs'} name={'Textiles'} />
                    <Imagecards image={'https://www.ikea.com/images/55/37/5537e2db6e63f664c33ef2c1cfd3b90b.jpg?f=xs'} name={'Cookware'} />
                    <Imagecards image={'https://www.ikea.com/images/25/7c/257cfd1795f5561023688571473f4678.jpg?f=xs'} name={'Decoration'} />
                    <Imagecards image={'https://www.ikea.com/images/f1/7d/f17d9897443bb614e2489e83a07cad69.jpg?f=xs'} name={'Shoe rack and clothes stand'} />
                    <Imagecards image={'https://www.ikea.com/images/71/74/7174cb3dea2042f227b5382aaf8d5d17.jpg?f=xs'} name={'Home electronics'} />
                    <Imagecards image={'https://www.ikea.com/images/23/2a/232af11a91aedfd8a1671763cf573fe1.jpg?f=xs'} name={'Lighting'} />


                </div>
            </div>
            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <hr />
            </div>
            <div>
                <h4>See how our products look in real homes!</h4>
                <p>Share your photos on Instagram with #IKEAlifeathome or tag @ikea.india to get a chance to be seen here!</p>
                <div className='d-flex' style={{ overflow: 'auto', overflowY: 'hidden', scrollBehavior: 'smooth', marginTop: '5%' }} >
                    <Imagecards image={'https://www.ikea.com/ext/ingkadam/m/31c4be989b302cd6/original/UGC100002188.jpg?f=xxl'} />
                    <Imagecards image={'https://www.ikea.com/ext/ingkadam/m/31c4be989b302cd6/original/UGC100002188.jpg?f=xxl'} />
                    <Imagecards image={'https://www.ikea.com/ext/ingkadam/m/2186a6be986c687a/original/UGC100001402.jpg?f=xxl'} />
                    <Imagecards image={'https://www.ikea.com/ext/ingkadam/m/5abcad38d253f2de/original/UGC100015564.jpg?f=xxl'} />
                    <Imagecards image={'https://www.ikea.com/ext/ingkadam/m/564745d4726a73a2/original/UGC100015762.jpg?f=xxl'} />
                    <Imagecards image={'https://www.ikea.com/ext/ingkadam/m/71d5527a7f02d8b0/original/UGC100001389.jpg?f=xxl'} />
                    <Imagecards image={'https://www.ikea.com/ext/ingkadam/m/22cb12f76d4d6800/original/UGC100001460.jpg?f=xxl'} />
                    <Imagecards image={'https://www.ikea.com/ext/ingkadam/m/49fca46a6eb822c4/original/UGC100015332.jpg?f=xxl'} />
                    <Imagecards image={'https://www.ikea.com/ext/ingkadam/m/1b91836834c039a0/original/UGC100001439.jpg?f=xxl'} />
                    <Imagecards image={'https://www.ikea.com/ext/ingkadam/m/42924e80d3b5e393/original/UGC100014406.jpg?f=xxl'} />
                </div>
            </div>
            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <hr />
            </div>
            <div className='d-flex' style={{ overflow: 'auto', overflowY: 'hidden', scrollBehavior: 'smooth' }}>
                <Contentcard image={'https://www.ikea.com/images/41/ed/41ed5c7206877ec91db94c5591e5fa7e.png?f=s'} title={'All offers'} text={'We always have some amazing offers waiting for you.'} textColor={'white'} color={'#334D34'} />
                <Contentcard image={'https://www.ikea.com/images/26/1a/261a21be328ae2ccc06f37505c4cd310.jpg?f=s'} title={'Products under Rs.199'} text={`You don't need a big wallet to afford high-quality products.`} textColor={'white'} color={'#620F0F'} />
                <Contentcard image={'https://www.ikea.com/images/3c/d3/3cd3902b186716ed15503a4b81060ece.png?f=s'} title={'Clearance sale'} text={'Grab the latest home furnishing trends at great prices.'} textColor={'black'} color={'#FFDB00'} />
                <Contentcard image={'https://www.ikea.com/images/3c/d3/3cd3902b186716ed15503a4b81060ece.png?f=s'} title={'Download IKEA app'} text={'Download the IKEA app today, and explore a wide range of affordable, well-designed and functional home furnishing solutions'} textColor={'white'} color={'#724434'} />
            </div>
            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <hr />
            </div>
            <div style={{ backgroundColor: '#0058A3', padding: '65px' }}>
                <h4 className='text-white'><b>Click & Collect</b> </h4>
                <p className='text-white'>You can now collect your orders from R CITY Mall (Mumbai) and Electronic City (Bengaluru)</p>
                <button className='btn rounded-pill bg-light px-4 py-2'><b>Know more</b> </button>
            </div>

            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <h4 style={{ marginBottom: '5%' }}>Top accessories categories</h4>
                <div className='d-flex' style={{ overflow: 'auto', overflowY: 'hidden', scrollBehavior: 'smooth' }} >
                    <Imagecards image={''} title={'Explore our guides to sustainable living'} />
                    <Imagecards image={'https://www.ikea.com/images/hand-adjusts-the-water-flow-of-a-glypen-kitchen-tap-in-stain-a84ab755c113500b4318c6e4d0dc9924.jpg?f=xs'} name={'Water saving'} />
                    <Imagecards image={'https://www.ikea.com/images/a-hand-pressing-the-switch-of-a-white-table-lamp-standing-on-d8a6f025fb2647b42caea256f8058feb.jpg?f=xs'} name={'Energy saving'} />
                    <Imagecards image={'https://www.ikea.com/images/a-woman-with-brown-hair-and-white-shirt-sleeping-under-a-whi-6f8f55594698055439b97d1138819aac.jpg?f=xs'} name={'Healthier home'} />
                    <Imagecards image={'https://www.ikea.com/images/three-white-sortera-bins-in-a-white-tiled-room-where-one-is--0c696d80fa4e20c5d518bf63765bd18c.jpg?f=xs'} name={'Reducing waste'} />
                    <Imagecards image={'https://www.ikea.com/images/ivar-chair-painted-light-green-standing-on-old-news-papers-i-f83b1db2f71591d77418a577c9c4be15.jpg?f=xs'} name={'More sustainable furniture'} />
                    <Imagecards image={'https://www.ikea.com/images/a-white-blanket-and-three-white-bowls-on-a-gamlehult-footsto-4e4d49761e05301b963aa83daa0595fc.jpg?f=xs'} name={'More sustainable materials'} />
                    <Imagecards image={'https://www.ikea.com/images/a-hand-seasoning-huvudroll-plant-balls-in-a-ikea-365-frying--7db662f2975f80a04340c49e7c068cfb.jpg?f=xs'} name={'More sustainable food'} />

                </div>
            </div>
            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <hr />
            </div>
            <div>
                <h2>More ideas and inspiration</h2>
                <div className='d-flex' style={{ marginBottom: '5%' }}>
                    <h4>From Customers</h4>
                    <h4 >From IKEA</h4>
                </div>
                {
                    loading ? 'loading' : <div style={{ columns: 'auto 3' }} >
                        {
                            state && state.map((ele) => {
                                return <InstaCard url={ele.imageUrl} key={ele.id} />
                            })
                        }
                    </div>
                }

                <button onClick={() => { setIndex(index + 1) }} className='btn btn-dark rounded-pill mb-5 ' style={{
                    display: 'flex', margin: '0 auto', padding: '1% 4%', fontSize: '18px'
                }}>Load Next 12</button>
            </div>


        </div >
    )
}

export default Home