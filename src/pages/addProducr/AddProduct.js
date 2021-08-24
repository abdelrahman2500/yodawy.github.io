import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./index.scss"

export default function AddProduct() {

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

    const[status, setStatus] = useState("d-none")

    function addProduct() {
        if(categ != "" && categBranch != "" && brand != "" && offer != "" && description != "" && productName != "" 
            && amount != "" && price != "" && imagePath != "" && categAr != "" && categBranchAr != ""  && brandAr != "" 
            && offerAr != "" && descriptionAr != "" && productNameAr != ""){
            setStatus("d-none")
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
                .then((json) => console.log(json));
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
            <div className="container">
            <form className="row g-3 needs-validation" noValidate>
            <div className="en col-6">
                <div className="row g3">
                    <div className="col-12">
                        <label htmlFor="categoryName" className="form-label">Category name</label>
                        <select className="form-select" id="categoryName" value={categ} onChange={(e)=> setCateg(e.target.value.trim())} required>
                            <option defaultValue="">Choose...</option>
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
                        <input className="form-control" placeholder="Branch" id="categoryBranchName"  value={categBranch} onChange={(e)=> setCategBranch(e.target.value.trim())} required />
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
                        <textarea className="form-control" id="description" placeholder="Required example textarea" value={description} onChange={(e)=> setDescription(e.target.value.trim())} required></textarea>
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
            <div className="ar col-6 text-end">
                <div className="col-12">
                    <label htmlFor="categoryNameAr" className="form-label">اسم القسم</label>
                    <input type="text" placeholder="اسم القسم" className="form-control" id="categoryNameAr" value={categAr} onChange={(e)=> setCategAr(e.target.value.trim())} required/>
                </div>
                <div className="col-12">
                    <label htmlFor="categoryBranchNameAr" className="form-label">اسم الفرع</label>
                    <input type="text" placeholder="اسم الفرع" className="form-control" id="categoryBranchNameAr" value={categBranchAr} onChange={(e)=> setCategBranchAr(e.target.value.trim())} required/>
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
            <Footer />
        </div>
    )
}
