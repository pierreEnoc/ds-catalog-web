import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import ProductDescriptionLoader from '../../../pages/Catalog/components/Loaders/ProductDescriptionLoader';
import ProductInfoLoader from '../../../pages/Catalog/components/Loaders/ProductInfoLoader';
import { Product } from '../../types/Product';
import { makeRequest } from '../../utils/request';
import ProductPrice from '../ProductPrice';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();
    const [product, setProduct] = useState<Product>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/products/${productId}` })
            .then(response => setProduct(response.data))
            .finally(() => setIsLoading(false))
    }, [productId]);

    return (
        <div className="product-details-container">
            <div className="card-base border-raduis-20 product-details">
                <Link to="/products" className="product-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-6">
                        {isLoading ? <ProductInfoLoader /> : (
                            <>
                                <div className="product-details-card text-center">
                                    <img src={product?.imgUrl} alt={product?.name} className="product-details-images" />
                                </div>
                                <h1 className="product-details-name">
                                    {product?.name}
                                </h1>
                                {product?.price && <ProductPrice price={product?.price} />}
                            </>
                        )}

                    </div>
                    <div className="col-6 product-details-card">
                      {isLoading ? <ProductDescriptionLoader /> : (
                           <>
                           <h1 className="product-description-title">
                               Descrição de produto
                           </h1>
                           <p className="product-description-text">
                               {product?.description}
                           </p>
                           </>
                      )}
                       
                        
                    </div>

                </div>
            </div>
        </div>
    );

};

export default ProductDetails;