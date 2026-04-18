import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product = { id: 1, name: "Sample Product", price: 999, originalPrice: 1499, rating: 4.5, reviews: 328, image: "🎁", inStock: true } }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0

  return (
    <Link to={`/products/${product.id}`} className="text-decoration-none">
      <div
        className="card h-100 border-0 shadow-sm position-relative overflow-hidden"
        style={{
          transition: "all 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
        }}
      >
        {/* Image Container */}
        <div
          style={{
            height: "180px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "60px",
            overflow: "hidden",
            position: "relative"
          }}
        >
          {product.image}

          {/* Discount Badge */}
          {discount > 0 && (
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#ff6b6b",
                color: "white",
                padding: "5px 10px",
                borderRadius: "4px",
                fontSize: "0.75rem",
                fontWeight: "bold"
              }}
            >
              -{discount}%
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "white",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            {isFavorite ? "❤️ " : "🤍"}
          </button>
        </div>

        {/* Card Body */}
        <div className="card-body">
          {/* Product Name */}
          <h6 className="card-title" style={{
            fontSize: "0.95rem",
            fontWeight: "600",
            marginBottom: "8px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "#333"
          }}>
            {product.name}
          </h6>

          {/* Rating */}
          <div className="mb-2" style={{ fontSize: "0.85rem" }}>
            <span style={{ color: "#ffc107" }}>⭐ {product.rating}</span>
            <span className="text-muted" style={{ fontSize: "0.8rem" }}> ({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <div className="d-flex align-items-center gap-2">
              <span className="h6 mb-0" style={{ color: "#667eea", fontWeight: "bold" }}>₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-muted" style={{ textDecoration: "line-through", fontSize: "0.9rem" }}>₹{product.originalPrice}</span>
              )}
            </div>
          </div>

          {/* Stock Status */}
          <div className="mb-3">
            <small style={{
              color: product.inStock ? "#28a745" : "#dc3545",
              fontWeight: "500"
            }}>
              {product.inStock ? "✓ In Stock" : "Out of Stock"}
            </small>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("Add to cart:", product.id);
            }}
            className="btn btn-sm w-100"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              fontWeight: "600",
              border: "none"
            }}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard