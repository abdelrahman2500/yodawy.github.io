import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./index.scss"
import { Context } from './../../context/Context';

export default function AddProduct() {
    const context = useContext(Context)

    let baby = ["baby accessories", "baby bath", "Baby Skin Care"];
    let bath_body = ["Shower", "Soap", "Tissues"];
    let beauty = ["Acne Treatment", "Anti-Aging", "facial care"];
    let contact_lences = ["bausch and lomb", "bella", "bio true"];
    let dermocosmetics = ["anti-aging", "anti-dandruff", "body care"];
    let hair_care = ["anti-hair loss", "conditioner", "hair dyes"];
    let men_care = ["electric shavers for men", "men's deodorants", "shaving"];
    let oral_care = ["mouth care", "tooth brush", "tooth paste"];
    let personal_care = ["Accessories", "Breathing Aid", "air fresheners"];

    const[categ, setCateg] = useState("")
    const[categAr, setCategAr] = useState("")
    const[categBranch, setCategBranch] = useState("")
    const[categBranchAr, setCategBranchAr] = useState("")
    const[brand, setBrand] = useState("")
    const[brandAr, setBrandAr] = useState("")
    const[offer, setOffer] = useState("")
    const[offerAr, setOfferAr] = useState("")
    const[description, setDescription] = useState("")
    const[descriptionAr, setDescriptionAr] = useState("")
    const[productName, setProductName] = useState("")
    const[productNameAr, setProductNameAr] = useState("")
    const[amount, setAmount] = useState("")
    const[price, setPrice] = useState("")
    const[imagePath, setImagePath] = useState("")
    function reset(){
        setCateg("")
        setCategAr("")
        setCategBranch("")
        setCategBranchAr("")
        setBrand("")
        setBrandAr("")
        setOffer("")
        setOfferAr("")
        setDescription("")
        setDescriptionAr("")
        setProductName("")
        setProductNameAr("")
        setAmount("")
        setPrice("")
        setImagePath("")
    }
    const[current, setCurrent] = useState([])

    useEffect(()=>{
        setCurrent(current)
    },[current])

    const[status, setStatus] = useState("d-none")

    function handleCateg(e){
        setCateg(e.target.value)
        switch (e.target.value) {
            case "baby":
                setCurrent(baby); 
                setCategAr("مستلزمات الأطفال")
                break;
            case "bath body":
                setCurrent(bath_body);
                setCategAr("مستلزمات الاستحمام")
                break;
            case "beauty":
                setCurrent(beauty);
                setCategAr("مستحضرات التجميل")
                break;
            case "contact lences":
                setCurrent(contact_lences);
                setCategAr("العدسات اللاصقة")
                break;
            case "dermocosmetics":
                setCurrent(dermocosmetics);
                setCategAr("منتجات التجميل الطبية")
                break;
            case "hair care":
                setCurrent(hair_care);
                setCategAr("العناية بالشعر")
                break;
            case "men care":
                setCurrent(men_care);
                setCategAr("مستلزمات الرجال")
                break;
            case "oral care":
                setCurrent(oral_care);
                setCategAr("العناية بالفم")
                break;
            case "personal care":
                setCurrent(personal_care);
                setCategAr("العناية الشخصية")
                break;
        
            default:
                break;
        }
        console.log(current)
    }

    function handleBranches(e){
        setCategBranch(e.target.value)
        switch (e.target.value) {
            case "baby accessories":
                setCategBranchAr("مستلزمات الأطفال")
                break;
            case "baby bath":
                setCategBranchAr("حمام الأطفال")
                break;
            case "Baby Skin Care":
                setCategBranchAr("العناية ببشرة الطفل")
                break;
            case "Shower":
                setCategBranchAr("استحمام")
                break;
            case "Soap":
                setCategBranchAr("صابون")
                break;
            case "Tissues":
                setCategBranchAr("مناديل")
                break;
            case "Acne Treatment":
                setCategBranchAr("علاج حب الشباب")
                break;
            case "Anti-Aging":
                setCategBranchAr("مكافحة الشيخوخة")
                break;
            case "facial care":
                setCategBranchAr("العناية بالوجه")
                break;
            case "bausch and lomb":
                setCategBranchAr("باوش اند لومب")
                break;
            case "bella":
                setCategBranchAr("بيلا")
                break;
            case "bio true":
                setCategBranchAr("بايو ترو")
                break;
            case "anti-aging":
                setCategBranchAr("مكافحة الشيخوخة")
                break;
            case "anti-dandruff":
                setCategBranchAr("مكافحة القشرة")
                break;
            case "body care":
                setCategBranchAr("العناية بالجسم")
                break;
            case "anti-hair loss":
                setCategBranchAr("مضاد لتساقط الشعر")
                break;
            case "conditioner":
                setCategBranchAr("بلسم وماسك الشعر")
                break;
            case "hair dyes":
                setCategBranchAr("صبغات الشعر")
                break;
            case "electric shavers for men":
                setCategBranchAr("ماكينات الحلاقة الكهربائية للرجال")
                break;
            case "men's deodorants":
                setCategBranchAr("مزيل العرق للرجال")
                break;
            case "shaving":
                setCategBranchAr("الحلاقة")
                break;
            case "mouth care":
                setCategBranchAr("العناية بالفم")
                break;
            case "tooth brush":
                setCategBranchAr("فرشاة الأسنان")
                break;
            case "tooth paste":
                setCategBranchAr("معجون الأسنان")
                break;
            case "Accessories":
                setCategBranchAr("الاكسسوارات")
                break;
            case "Breathing Aid":
                setCategBranchAr("أجهزة التنفس")
                break;
            case "air fresheners":
                setCategBranchAr("المعطرات")
                break;
            default:
                break;
        }
    }

    function addProduct() {
        if(categ != "" && categBranch != "" && brand != "" && offer != "" && description != "" && productName != "" 
            && amount != "" && price != "" && imagePath != "" && categAr != "" && categBranchAr != ""  && brandAr != "" 
            && offerAr != "" && descriptionAr != "" && productNameAr != ""){
            setStatus("d-none")
            context.products.push({
                categoryName: categ,
                categoryBranchName: categBranch,
                brand:brand,
                offer:offer,
                description:description,
                productName:productName,
                amount:Number(amount),
                price:Number(price),
                imagePath:imagePath,
                categoryNameAr:categAr,
                categoryBranchNameAr:categBranchAr,
                brandAr:brandAr,
                offerAr:offerAr,
                descriptionAr:descriptionAr,
                nameAr:productNameAr,
                date: new Date().getTime()
            })
            fetch('http://localhost:3001/products', {
                method: 'POST',
                body: JSON.stringify({
                    categoryName: categ,
                    categoryBranchName: categBranch,
                    brand:brand,
                    offer:offer,
                    description:description,
                    productName:productName,
                    amount:Number(amount),
                    price:Number(price),
                    imagePath:imagePath,
                    categoryNameAr:categAr,
                    categoryBranchNameAr:categBranchAr,
                    brandAr:brandAr,
                    offerAr:offerAr,
                    descriptionAr:descriptionAr,
                    nameAr:productNameAr,
                    date: new Date().getTime()
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then(() => reset())
                .then(()=> alert("You Added New Product"))

            }else{
                setStatus("")
                console.log(status)
            }
        }
        useEffect(()=>{
            setStatus(status)
        },[status])

    return (
        <div className="add-product">
            <Navbar compo={true} />
            {localStorage.getItem("role") == "seller" ? 
            <div className="container small">
            <h3 className="text-info my-3">add product</h3>
            <form className="row g-3 needs-validation" noValidate>
            <div className="en col-6">
                <div className="row g3">
                    <div className="col-12">
                        <label htmlFor="categoryName" className="form-label">Category name</label>
                        <select className="form-select" id="categoryName" value={categ} onChange={(e)=> handleCateg(e)} required>
                            <option disabled value="">Choose...</option>
                            <option value="baby">baby</option>
                            <option value="bath body">bath & body</option>
                            <option value="beauty">beauty</option>
                            <option value="contact lences">contact lences</option>
                            <option value="dermocosmetics">dermocosmetics</option>
                            <option value="hair care">hair care</option>
                            <option value="men care">men care</option>
                            <option value="oral care">oral care</option>
                            <option value="personal care">personal care</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select the Category name.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="categoryBranchName" className="form-label">Category branch name</label>
                        <select className="form-control" placeholder="Branch" id="categoryBranchName"  value={categBranch} onChange={(e)=> handleBranches(e)} required >
                            <option disabled value="">Choose...</option>
                            {current.map(el => <option key={el} value={el}>{el}</option>)}
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="brandName" className="form-label">brand</label>
                        <input type="text" placeholder="brand" className="form-control" id="brandName" value={brand} onChange={(e)=> setBrand(e.target.value.trim())} required/>
                        <div className="invalid-feedback">
                            Please enter the brand name.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="offer" className="form-label">offer</label>
                        <input type="text" placeholder="offer" className="form-control" id="offer" value={offer} onChange={(e)=> setOffer(e.target.value.trim())} required/>
                        <div className="invalid-feedback">
                            Please enter the offer of the product.
                        </div>
                    </div>
                    <div className="mb-12">
                        <label htmlFor="description" className="form-label">describtion</label>
                        <textarea className="form-control" id="description" placeholder="Product Describtion" value={description} onChange={(e)=> setDescription(e.target.value.trim())} required></textarea>
                        <div className="invalid-feedback">
                            Please enter the describtion of the product.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="productName" className="form-label">produact name</label>
                        <input type="text" placeholder="produact name" className="form-control" id="productName" value={productName} onChange={(e)=> setProductName(e.target.value.trim())} required/>
                        <div className="invalid-feedback">
                            Please enter the name of the product.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="amount" className="form-label">amount</label>
                        <input type="number" min="1" className="form-control " id="amount" value="10" aria-describedby="validationServer05Feedback" value={amount} onChange={(e)=> setAmount(e.target.value.trim())} required/>
                        <div id="validationServer05Feedback" className="invalid-feedback">
                            Please enter the amount.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="price" className="form-label">price</label>
                        <input type="number" min="1" className="form-control " id="price" value="10" aria-describedby="validationServer05Feedback" value={price} onChange={(e)=> setPrice(e.target.value.trim())} required/>
                        <div id="validationServer05Feedback" className="invalid-feedback">
                            Please enter the product price.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="imagePath" className="form-label">image path</label>
                        <input type="text" placeholder="image path" value="" className="form-control" id="imagePath" value={imagePath} onChange={(e)=> setImagePath(e.target.value.trim())} required/>
                        <div className="invalid-feedback">
                            Please enter the path of product image.
                        </div>
                    </div>

                </div>
            </div>
            <div className="ar col-6 text-end" dir="rtl">
                <div className="col-12">
                    <label htmlFor="categoryNameAr" className="form-label">اسم القسم</label>
                    <input disabled type="text" placeholder="اسم القسم" className="form-control" id="categoryNameAr" value={categAr} onChange={(e)=> setCategAr(e.target.value.trim())} required/>
                </div>
                <div className="col-12">
                    <label htmlFor="categoryBranchNameAr" className="form-label">اسم الفرع</label>
                    <input disabled type="text" placeholder="اسم الفرع" className="form-control" id="categoryBranchNameAr" value={categBranchAr} onChange={(e)=> setCategBranchAr(e.target.value.trim())} required/>
                </div>
                <div className="col-12">
                    <label htmlFor="brandAr" className="form-label">اسم الماركة</label>
                    <input type="text" placeholder="اسم الماركة" className="form-control" id="brandAr" value={brandAr} onChange={(e)=> setBrandAr(e.target.value.trim())} required/>
                    <div className="invalid-feedback">
                        من فضلك ادخل ماركة المنتج
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="offerAr" className="form-label">العرض</label>
                    <input type="text" placeholder="العرض" className="form-control" id="offerAr" value={offerAr} onChange={(e)=> setOfferAr(e.target.value.trim())} required/>
                    <div className="invalid-feedback">
                        من فضلك ادخل العرض المقدم
                    </div>
                </div>
                
                <div className="mb-12">
                    <label htmlFor="descriptionAr" className="form-label">الوصف</label>
                    <textarea className="form-control" id="descriptionAr" placeholder="وصف المنتج" value={descriptionAr} onChange={(e)=> setDescriptionAr(e.target.value.trim())} required></textarea>
                    <div className="invalid-feedback">
                        من فضلك ادخل وصف المنتج
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="nameAr" className="form-label">اسم المنتج</label>
                    <input type="text" placeholder="الاسم" className="form-control" id="nameAr" value={productNameAr} onChange={(e)=> setProductNameAr(e.target.value.trim())} required/>
                    <div className="invalid-feedback">
                        من فضلك ادخل اسم المنتج
                    </div>
                </div>
            </div>
            <div className="col-12 mb-5">
                <p className={`${status} lead text-danger text-center fw-bold`}>All Fields Must Be Filled</p>
                <button className="btn btn-primary w-100" type="button" onClick={()=>addProduct()}>Add Product</button>
            </div>
        </form>
            </div>
            : 
            <div className="container ">
                <div className="text-center not-found m-5">
                    <i className="fas fa-exclamation-triangle"></i>
                    <p className="lead my-3 fw-bold">this page is available only for sellers</p>
                </div>
            </div>   
        }
            <Footer />
        </div>
    )
}
