import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router';

import {
    LuLayoutDashboard, LuPackage, LuSettings, LuLogOut,
    LuCirclePlus, LuSearch, LuTrash2, LuPencil,
    LuDollarSign, LuActivity, LuCreditCard, LuUserPlus
} from 'react-icons/lu';


// --- (Part 1 of 4): Types and Initial Data ---

type Product = {
    id: number;
    name: string;
    category: 'Games' | 'Gift Cards' | 'Software' | 'Topups';
    price: number;
    stock: number;
    status: 'Active' | 'Archived';
};

const initialProducts: Product[] = Array.from({ length: 55 }, (_, i) => ({
    id: 1001 + i,
    name: `Product Item #${i + 1}`,
    category: i % 4 === 0 ? 'Gift Cards' : i % 3 === 0 ? 'Software' : i % 2 === 0 ? 'Topups' : 'Games',
    price: parseFloat((20 + Math.random() * 500).toFixed(2)),
    stock: Math.floor(Math.random() * 200),
    status: Math.random() > 0.3 ? 'Active' : 'Archived',
}));

// Add to your existing types
type OrderStatus = 'Pending' | 'Processing' | 'Completed' | 'Cancelled' | 'Refunded';
type PaymentStatus = 'Paid' | 'Pending' | 'Failed' | 'Refunded';
type PaymentMethod = 'Credit Card' | 'PayPal' | 'Bank Transfer' | 'Crypto';

type OrderItem = {
    id: number;
    productId: number;
    productName: string;
    quantity: number;
    price: number;
};

type Order = {
    id: number;
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    totalAmount: number;
    orderDate: string;
    status: OrderStatus;
    paymentStatus: PaymentStatus;
    paymentMethod: PaymentMethod;
    items: OrderItem[];
    shippingAddress: string;
};

// Update DashboardTab type
type DashboardTab = 'overview' | 'products' | 'orders';

// Sample orders data

const initialOrders: Order[] = Array.from({ length: 45 }, (_, i) => {
    const statuses: OrderStatus[] = ['Pending', 'Processing', 'Completed', 'Cancelled', 'Refunded'];
    const paymentStatuses: PaymentStatus[] = ['Paid', 'Pending', 'Failed', 'Refunded'];
    const paymentMethods: PaymentMethod[] = ['Credit Card', 'PayPal', 'Bank Transfer', 'Crypto'];

    const status = statuses[i % 5];
    const paymentStatus = paymentStatuses[i % 4];
    const paymentMethod = paymentMethods[i % 4];

    return {
        id: 2000 + i,
        orderNumber: `ORD-${1000 + i}`,
        customerName: `Customer ${i + 1}`,
        customerEmail: `customer${i + 1}@example.com`,
        totalAmount: parseFloat((50 + Math.random() * 500).toFixed(2)),
        orderDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status,
        paymentStatus,
        paymentMethod,
        shippingAddress: `Address ${i + 1}, City, Country`,
        items: [
            {
                id: 1,
                productId: 1001 + i,
                productName: `Product ${i + 1}`,
                quantity: Math.floor(Math.random() * 3) + 1,
                price: parseFloat((20 + Math.random() * 100).toFixed(2))
            },
            ...(Math.random() > 0.7 ? [{
                id: 2,
                productId: 1002 + i,
                productName: `Product ${i + 2}`,
                quantity: 1,
                price: parseFloat((10 + Math.random() * 50).toFixed(2))
            }] : [])
        ]
    };
});

const OrderModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    order: Order | null;
    onStatusUpdate: (orderId: number, newStatus: OrderStatus) => void;
}> = ({ isOpen, onClose, order, onStatusUpdate }) => {
    const [isUpdating, setIsUpdating] = useState(false);

    if (!isOpen || !order) return null;

    const handleStatusUpdate = async (newStatus: OrderStatus) => {
        setIsUpdating(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        onStatusUpdate(order.id, newStatus);
        setIsUpdating(false);
    };

    const getStatusColor = (status: OrderStatus) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-900 text-yellow-300';
            case 'Processing': return 'bg-blue-900 text-blue-300';
            case 'Completed': return 'bg-green-900 text-green-300';
            case 'Cancelled': return 'bg-red-900 text-red-300';
            case 'Refunded': return 'bg-purple-900 text-purple-300';
            default: return 'bg-gray-700 text-gray-300';
        }
    };

    const getPaymentStatusColor = (status: PaymentStatus) => {
        switch (status) {
            case 'Paid': return 'bg-green-900 text-green-300';
            case 'Pending': return 'bg-yellow-900 text-yellow-300';
            case 'Failed': return 'bg-red-900 text-red-300';
            case 'Refunded': return 'bg-purple-900 text-purple-300';
            default: return 'bg-gray-700 text-gray-300';
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Order Details - {order.orderNumber}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2">Customer Information</h3>
                            <div className="bg-[#2a2a2a] p-4 rounded-lg">
                                <p className="font-semibold">{order.customerName}</p>
                                <p className="text-gray-400 text-sm">{order.customerEmail}</p>
                                <p className="text-gray-400 text-sm mt-2">{order.shippingAddress}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2">Order Information</h3>
                            <div className="bg-[#2a2a2a] p-4 rounded-lg space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Order Date:</span>
                                    <span>{new Date(order.orderDate).toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total Amount:</span>
                                    <span className="font-semibold">${order.totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Payment Method:</span>
                                    <span>{order.paymentMethod}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2">Status Management</h3>
                            <div className="bg-[#2a2a2a] p-4 rounded-lg space-y-4">
                                <div className="flex justify-between items-center">
                                    <span>Order Status:</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Payment Status:</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(order.paymentStatus)}`}>
                                        {order.paymentStatus}
                                    </span>
                                </div>

                                {order.status !== 'Completed' && order.status !== 'Cancelled' && (
                                    <div className="pt-4">
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Update Order Status</label>
                                        <div className="flex gap-2 flex-wrap">
                                            {(['Processing', 'Completed', 'Cancelled'] as OrderStatus[]).map(status => (
                                                <button
                                                    key={status}
                                                    onClick={() => handleStatusUpdate(status)}
                                                    disabled={isUpdating}
                                                    className="px-3 py-2 bg-[#4885FF] rounded-md text-sm hover:bg-[#6C9DFF] disabled:opacity-50"
                                                >
                                                    {isUpdating ? <Spinner size={16} /> : `Mark as ${status}`}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Order Items</h3>
                    <div className="bg-[#2a2a2a] rounded-lg overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-[#212121]">
                                <tr>
                                    <th className="px-4 py-3 text-left">Product</th>
                                    <th className="px-4 py-3 text-center">Quantity</th>
                                    <th className="px-4 py-3 text-right">Price</th>
                                    <th className="px-4 py-3 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.items.map(item => (
                                    <tr key={item.id} className="border-b border-gray-700 last:border-b-0">
                                        <td className="px-4 py-3">{item.productName}</td>
                                        <td className="px-4 py-3 text-center">{item.quantity}</td>
                                        <td className="px-4 py-3 text-right">${item.price.toFixed(2)}</td>
                                        <td className="px-4 py-3 text-right">${(item.quantity * item.price).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- (Part 2 of 4): Reusable UI Components ---

const Spinner: React.FC<{ size?: number }> = ({ size = 20 }) => (
    <svg style={{ width: size, height: size }} className="animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const ProductModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onSave: (productData: Omit<Product, 'id' | 'status'> & { status: 'Active' | 'Archived' }) => void;
    productToEdit?: Product | null;
}> = ({ isOpen, onClose, onSave, productToEdit }) => {
    const [formData, setFormData] = useState({ name: '', category: 'Games' as Product['category'], price: 0, stock: 0, status: 'Active' as Product['status'] });
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (isOpen) {
            if (productToEdit) setFormData(productToEdit);
            else setFormData({ name: '', category: 'Games', price: 0, stock: 0, status: 'Active' });
        }
    }, [productToEdit, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: (name === 'price' || name === 'stock') ? parseFloat(value) || 0 : value }));
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            onSave(formData);
            setIsSaving(false);
            onClose();
        }, 1000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-lg w-full max-w-md shadow-2xl">
                <h2 className="text-xl font-semibold mb-6">{productToEdit ? 'Edit Product' : 'Add New Product'}</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Product Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-[#4885FF]" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                        <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-[#4885FF]">
                            <option>Games</option><option>Gift Cards</option><option>Software</option><option>Topups</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-sm font-medium text-gray-400 mb-1">Price</label><input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-[#4885FF]" /></div>
                        <div><label className="block text-sm font-medium text-gray-400 mb-1">Stock</label><input type="number" name="stock" value={formData.stock} onChange={handleChange} className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-[#4885FF]" /></div>
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-8">
                    <button onClick={onClose} className="px-5 py-2.5 bg-gray-600 rounded-md hover:bg-gray-500 text-sm font-semibold">Cancel</button>
                    <button onClick={handleSave} className="px-5 py-2.5 bg-[#4885FF] rounded-md hover:bg-[#6C9DFF] flex items-center gap-2 text-sm font-semibold min-w-[120px] justify-center">
                        {isSaving ? <Spinner size={16} /> : (productToEdit ? 'Save Changes' : 'Add Product')}
                    </button>
                </div>
            </div>
        </div>
    );
};

const ConfirmationDialog: React.FC<{ isOpen: boolean; onClose: () => void; onConfirm: () => void; title: string; message: string }> = ({ isOpen, onClose, onConfirm, title, message }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const handleConfirm = () => {
        setIsProcessing(true);
        setTimeout(() => {
            onConfirm();
            setIsProcessing(false);
            onClose(); // Close the modal on success
        }, 1000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-lg w-full max-w-sm shadow-2xl">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-gray-400 text-sm mb-6">{message}</p>
                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500 font-semibold text-sm">Cancel</button>
                    <button onClick={handleConfirm} className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-500 flex items-center gap-2 font-semibold text-sm min-w-[100px] justify-center">
                        {isProcessing ? <Spinner size={16} /> : 'Delete'}
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- (Part 3 of 4): Tab View Components ---

const OverviewTab = () => {
    const summaryData = [
        { title: 'Total Revenue', value: '$45,231.89', change: '+20.1% from last month', icon: <LuDollarSign /> },
        { title: 'Sales', value: '+12,234', change: '+19% from last month', icon: <LuCreditCard /> },
        { title: 'New Customers', value: '+2,350', change: '+180.1% from last month', icon: <LuUserPlus /> },
        { title: 'Active Now', value: '+573', change: '+201 since last hour', icon: <LuActivity /> },
    ];
    return (
        <div className="p-6 md:p-10">
            <header className="mb-8"><h2 className="text-3xl font-bold">Good morning, Alex!</h2><p className="text-gray-400">Here's what's happening with your store today.</p></header>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{summaryData.map(({ title, value, change, icon }) => (<div key={title} className="bg-[#161616] border border-gray-800 p-5 rounded-xl shadow-lg transition-transform hover:scale-105 hover:border-[#4885FF]/50"><div className="flex justify-between items-center mb-2"><h3 className="text-sm font-medium text-gray-400">{title}</h3><div className="text-gray-500">{icon}</div></div><div><p className="text-3xl font-bold text-white">{value}</p><p className="text-xs text-gray-500 mt-1">{change}</p></div></div>))}</div>
        </div>
    );
};

const ProductsTab = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState<Product | null>(null);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [productsToDelete, setProductsToDelete] = useState<number[]>([]);
    const itemsPerPage = 10;

    useEffect(() => { setTimeout(() => { setProducts(initialProducts); setIsLoading(false); }, 1500) }, []);

    const filteredProducts = useMemo(() => products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())), [products, searchTerm]);
    const paginatedProducts = useMemo(() => filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage), [filteredProducts, currentPage]);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => { setIsSearching(true); setSearchTerm(e.target.value); setCurrentPage(1); setTimeout(() => setIsSearching(false), 500); };
    const handleSaveProduct = (data: Omit<Product, 'id'>) => { productToEdit ? setProducts(ps => ps.map(p => p.id === productToEdit.id ? { ...p, ...data } : p)) : setProducts(ps => [{ ...data, id: Date.now() }, ...ps]); setProductToEdit(null); };
    const handleDeleteClick = (ids: number[]) => { setProductsToDelete(ids); setIsDeleteConfirmOpen(true); };
    const handleConfirmDelete = () => { setProducts(ps => ps.filter(p => !productsToDelete.includes(p.id))); setSelectedProducts([]); setIsDeleteConfirmOpen(false); };
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => { e.target.checked ? setSelectedProducts(paginatedProducts.map(p => p.id)) : setSelectedProducts([]); };
    const handleSelectOne = (id: number) => { setSelectedProducts(ps => ps.includes(id) ? ps.filter(pid => pid !== id) : [...ps, id]); };

    const TableSkeleton = () => <div className="space-y-3 animate-pulse">{[...Array(11)].map((_, i) => <div key={i} className={`h-12 ${i === 0 ? 'h-10' : ''} bg-gray-800/50 rounded-md`}></div>)}</div>;

    return (
        <div className="p-6 md:p-10">
            <header className="mb-8"><h2 className="text-3xl font-bold">Product Management</h2><p className="text-gray-400">Add, edit, and manage all your products.</p></header>
            <div className="bg-[#161616] border border-gray-800 p-6 rounded-xl shadow-lg">
                {isLoading ? <TableSkeleton /> : (
                    <>
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4"><div className="relative w-full md:w-auto"><LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" /><input type="text" placeholder="Search products..." value={searchTerm} onChange={handleSearchChange} className="bg-[#212121] border border-gray-700 text-white w-full md:w-80 pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4885FF]" /></div><button onClick={() => { setProductToEdit(null); setIsModalOpen(true); }} className="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#4885FF] rounded-lg font-semibold hover:bg-[#6C9DFF] transition"><LuCirclePlus size={18} /> Add Product</button></div>
                        {selectedProducts.length > 0 && <div className="mb-4 flex items-center gap-4 border-y border-gray-800 py-3"><span className="text-sm font-semibold text-gray-300">{selectedProducts.length} selected</span><button onClick={() => handleDeleteClick(selectedProducts)} className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400 bg-red-500/10 px-3 py-1.5 rounded-md"><LuTrash2 size={16} /> Delete Selected</button></div>}
                        <div className="relative overflow-x-auto">{isSearching && <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10"><Spinner /></div>}<table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-400 uppercase bg-[#212121]/50"><tr><th scope="col" className="p-4"><input type="checkbox" onChange={handleSelectAll} checked={paginatedProducts.length > 0 && selectedProducts.length === paginatedProducts.length} className="w-4 h-4 rounded accent-[#4885FF]" /></th><th scope="col" className="px-6 py-3">Product</th><th scope="col" className="px-6 py-3">Status</th><th scope="col" className="px-6 py-3">Price</th><th scope="col" className="px-6 py-3">Stock</th><th scope="col" className="px-6 py-3 text-right">Actions</th></tr></thead>
                            <tbody>{paginatedProducts.map(p => (<tr key={p.id} className="border-b border-gray-800 hover:bg-[#212121]/30"><td className="p-4"><input type="checkbox" checked={selectedProducts.includes(p.id)} onChange={() => handleSelectOne(p.id)} className="w-4 h-4 rounded accent-[#4885FF]" /></td><td className="px-6 py-4 font-medium text-white">{p.name}</td><td className="px-6 py-4"><span className={`px-2 py-1 text-xs rounded-full ${p.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-gray-700 text-gray-300'}`}>{p.status}</span></td><td className="px-6 py-4">${p.price.toFixed(2)}</td><td className="px-6 py-4">{p.stock}</td><td className="px-6 py-4 flex items-center justify-end gap-4"><button onClick={() => { setProductToEdit(p); setIsModalOpen(true); }} className="text-gray-400 hover:text-white"><LuPencil /></button><button onClick={() => handleDeleteClick([p.id])} className="text-gray-400 hover:text-red-500"><LuTrash2 /></button></td></tr>))}</tbody>
                        </table>{paginatedProducts.length === 0 && <div className="text-center py-10 text-gray-500">No products found.</div>}</div>
                        <nav className="flex items-center justify-between pt-4"><span className="text-sm text-gray-400">Showing <strong>{filteredProducts.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}</strong>-<strong>{Math.min(currentPage * itemsPerPage, filteredProducts.length)}</strong> of <strong>{filteredProducts.length}</strong></span><div className="inline-flex items-center -space-x-px"><button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1} className="px-3 py-2 text-gray-400 bg-gray-800 border border-gray-700 rounded-l-lg hover:bg-gray-700 disabled:opacity-50">Prev</button><button onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage >= totalPages} className="px-3 py-2 text-gray-400 bg-gray-800 border border-gray-700 rounded-r-lg hover:bg-gray-700 disabled:opacity-50">Next</button></div></nav>
                    </>
                )}
            </div>
            <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSaveProduct} productToEdit={productToEdit} />
            <ConfirmationDialog isOpen={isDeleteConfirmOpen} onClose={() => setIsDeleteConfirmOpen(false)} onConfirm={handleConfirmDelete} title="Confirm Deletion" message={`Are you sure you want to delete ${productsToDelete.length} product(s)?`} />
        </div>
    );
};

const OrdersTab = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<OrderStatus | 'All'>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const itemsPerPage = 10;

    useEffect(() => {
        setTimeout(() => {
            setOrders(initialOrders);
            setIsLoading(false);
        }, 1500);
    }, []);

    const filteredOrders = useMemo(() => {
        return orders.filter(order => {
            const matchesSearch = order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [orders, searchTerm, statusFilter]);

    const paginatedOrders = useMemo(() => {
        return filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    }, [filteredOrders, currentPage]);

    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    const handleStatusUpdate = (orderId: number, newStatus: OrderStatus) => {
        setOrders(prev => prev.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        ));
        setIsModalOpen(false);
    };

    const handleViewOrder = (order: Order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const getStatusColor = (status: OrderStatus) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-900 text-yellow-300';
            case 'Processing': return 'bg-blue-900 text-blue-300';
            case 'Completed': return 'bg-green-900 text-green-300';
            case 'Cancelled': return 'bg-red-900 text-red-300';
            case 'Refunded': return 'bg-purple-900 text-purple-300';
            default: return 'bg-gray-700 text-gray-300';
        }
    };

    const getPaymentStatusColor = (status: PaymentStatus) => {
        switch (status) {
            case 'Paid': return 'bg-green-900 text-green-300';
            case 'Pending': return 'bg-yellow-900 text-yellow-300';
            case 'Failed': return 'bg-red-900 text-red-300';
            case 'Refunded': return 'bg-purple-900 text-purple-300';
            default: return 'bg-gray-700 text-gray-300';
        }
    };

    const TableSkeleton = () => (
        <div className="space-y-3 animate-pulse">
            {[...Array(11)].map((_, i) => (
                <div key={i} className={`h-12 ${i === 0 ? 'h-10' : ''} bg-gray-800/50 rounded-md`}></div>
            ))}
        </div>
    );

    return (
        <div className="p-6 md:p-10">
            <header className="mb-8">
                <h2 className="text-3xl font-bold">Order Management</h2>
                <p className="text-gray-400">View and manage all customer orders.</p>
            </header>

            <div className="bg-[#161616] border border-gray-800 p-6 rounded-xl shadow-lg">
                {isLoading ? (
                    <TableSkeleton />
                ) : (
                    <>
                        {/* Filters and Search */}
                        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
                            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                <div className="relative">
                                    <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <input
                                        type="text"
                                        placeholder="Search orders..."
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        className="bg-[#212121] border border-gray-700 text-white w-full sm:w-80 pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4885FF]"
                                    />
                                </div>

                                <select
                                    value={statusFilter}
                                    onChange={(e) => {
                                        setStatusFilter(e.target.value as OrderStatus | 'All');
                                        setCurrentPage(1);
                                    }}
                                    className="bg-[#212121] border border-gray-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4885FF]"
                                >
                                    <option value="All">All Statuses</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Refunded">Refunded</option>
                                </select>
                            </div>

                            <div className="text-sm text-gray-400">
                                {filteredOrders.length} orders found
                            </div>
                        </div>

                        {/* Orders Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-400 uppercase bg-[#212121]/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Order #</th>
                                        <th scope="col" className="px-6 py-3">Customer</th>
                                        <th scope="col" className="px-6 py-3">Date</th>
                                        <th scope="col" className="px-6 py-3">Amount</th>
                                        <th scope="col" className="px-6 py-3">Status</th>
                                        <th scope="col" className="px-6 py-3">Payment</th>
                                        <th scope="col" className="px-6 py-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedOrders.map(order => (
                                        <tr key={order.id} className="border-b border-gray-800 hover:bg-[#212121]/30">
                                            <td className="px-6 py-4 font-medium text-white">{order.orderNumber}</td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className="font-medium">{order.customerName}</div>
                                                    <div className="text-gray-400 text-xs">{order.customerEmail}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">{new Date(order.orderDate).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 font-semibold">${order.totalAmount.toFixed(2)}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(order.paymentStatus)}`}>
                                                    {order.paymentStatus}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => handleViewOrder(order)}
                                                    className="text-[#4885FF] hover:text-[#6C9DFF] font-medium text-sm"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {paginatedOrders.length === 0 && (
                                <div className="text-center py-10 text-gray-500">
                                    No orders found matching your criteria.
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        <nav className="flex items-center justify-between pt-4">
                            <span className="text-sm text-gray-400">
                                Showing <strong>{(currentPage - 1) * itemsPerPage + 1}</strong>-<strong>
                                    {Math.min(currentPage * itemsPerPage, filteredOrders.length)}</strong> of <strong>
                                    {filteredOrders.length}</strong>
                            </span>
                            <div className="inline-flex items-center -space-x-px">
                                <button
                                    onClick={() => setCurrentPage(p => p - 1)}
                                    disabled={currentPage === 1}
                                    className="px-3 py-2 text-gray-400 bg-gray-800 border border-gray-700 rounded-l-lg hover:bg-gray-700 disabled:opacity-50"
                                >
                                    Prev
                                </button>
                                <button
                                    onClick={() => setCurrentPage(p => p + 1)}
                                    disabled={currentPage >= totalPages}
                                    className="px-3 py-2 text-gray-400 bg-gray-800 border border-gray-700 rounded-r-lg hover:bg-gray-700 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </nav>
                    </>
                )}
            </div>

            {/* Order Modal */}
            <OrderModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                order={selectedOrder}
                onStatusUpdate={handleStatusUpdate}
            />
        </div>
    );
};

// Add this above the SettingsTab component
const ProfileSettings = () => {
    const [isSaving, setIsSaving] = useState(false);
    const [profile, setProfile] = useState({ name: 'Alex Johnson', email: 'alex.j@example.com' });
    const [profileImage, setProfileImage] = useState<string | null>('https://i.pravatar.cc/150'); // Placeholder image

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfileImage(event.target?.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 1500); // Simulate API call
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-6">
                <img src={profileImage || undefined} alt="Profile" className="w-24 h-24 rounded-full bg-gray-700 object-cover" />
                <div>
                    <input type="file" accept="image/*" onChange={handleImageChange} id="profile-upload" className="hidden" />
                    <label htmlFor="profile-upload" className="cursor-pointer px-4 py-2 bg-[#4885FF] text-white text-sm font-semibold rounded-lg hover:bg-[#6C9DFF]">
                        Upload Image
                    </label>
                    <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB.</p>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="block text-sm text-gray-400 mb-1">Full Name</label><input type="text" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} className="w-full bg-[#2a2a2a] p-2.5 rounded-md border border-gray-700" /></div>
                <div><label className="block text-sm text-gray-400 mb-1">Email Address</label><input type="email" value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })} className="w-full bg-[#2a2a2a] p-2.5 rounded-md border border-gray-700" /></div>
            </div>

            <div className="flex justify-end pt-4">
                <button onClick={handleSave} className="px-6 py-2.5 bg-green-600 rounded-lg font-semibold hover:bg-green-500 flex items-center gap-2 min-w-[140px] justify-center">
                    {isSaving ? <Spinner size={16} /> : 'Save Changes'}
                </button>
            </div>
        </div>
    );
};

// Add this above the SettingsTab component
const GeneralSettings = () => {
    const [isSaving, setIsSaving] = useState(false);
    const handleSave = () => { setIsSaving(true); setTimeout(() => setIsSaving(false), 1500); };

    return (
        <div className="space-y-6 max-w-2xl">
            <div><label className="block text-sm text-gray-400 mb-1">Store Name</label><input type="text" defaultValue="ClickShift Store" className="w-full bg-[#2a2a2a] p-2.5 rounded-md border border-gray-700" /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Default Currency</label><select className="w-full bg-[#2a2a2a] p-2.5 rounded-md border border-gray-700"><option>USD</option><option>EUR</option><option>GBP</option></select></div>

            <div className="flex justify-end pt-4">
                <button onClick={handleSave} className="px-6 py-2.5 bg-green-600 rounded-lg font-semibold hover:bg-green-500 flex items-center gap-2 min-w-[140px] justify-center">
                    {isSaving ? <Spinner size={16} /> : 'Save Changes'}
                </button>
            </div>
        </div>
    );
};

const PaymentSettings = () => {
    const [isSaving, setIsSaving] = useState(false);
    const handleSave = () => { setIsSaving(true); setTimeout(() => setIsSaving(false), 1500); };

    return (
        <div className="space-y-6 max-w-2xl">
            <h3 className="text-lg font-semibold text-white">Payment Providers</h3>
            <div className="p-4 bg-[#2a2a2a]/50 border border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2">Stripe</h4>
                <div className="space-y-4">
                    <div><label className="block text-sm text-gray-400 mb-1">Stripe Publishable Key</label><input type="text" placeholder="pk_live_************************" className="w-full bg-[#1a1a1a] p-2.5 rounded-md border border-gray-600" /></div>
                    <div><label className="block text-sm text-gray-400 mb-1">Stripe Secret Key</label><input type="password" placeholder="sk_live_************************" className="w-full bg-[#1a1a1a] p-2.5 rounded-md border border-gray-600" /></div>
                </div>
            </div>
            <div className="p-4 bg-[#2a2a2a]/50 border border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2">PayPal</h4>
                <div><label className="block text-sm text-gray-400 mb-1">PayPal Client ID</label><input type="text" placeholder="A...************************" className="w-full bg-[#1a1a1a] p-2.5 rounded-md border border-gray-600" /></div>
            </div>

            <div className="flex justify-end pt-4">
                <button onClick={handleSave} className="px-6 py-2.5 bg-green-600 rounded-lg font-semibold hover:bg-green-500 flex items-center gap-2 min-w-[140px] justify-center">
                    {isSaving ? <Spinner size={16} /> : 'Save Changes'}
                </button>
            </div>
        </div>
    );
};

const BillingSettings = () => {
    const [isManaging, setIsManaging] = useState(false);
    const handleManageSubscription = () => { setIsManaging(true); setTimeout(() => setIsManaging(false), 2000); };

    return (
        <div className="space-y-8 max-w-2xl">
            <div className="p-6 bg-[#2a2a2a]/50 border border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">Subscription Plan</h3>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <p className="text-gray-300">Your current plan is <strong className="text-[#4885FF]">Pro Tier</strong>.</p>
                        <p className="text-sm text-gray-500">Renews on December 23, 2025.</p>
                    </div>
                    <button onClick={handleManageSubscription} className="mt-4 sm:mt-0 px-5 py-2.5 bg-gray-600 rounded-lg font-semibold hover:bg-gray-500 flex items-center gap-2 min-w-[180px] justify-center">
                        {isManaging ? <Spinner size={16} /> : 'Manage Subscription'}
                    </button>
                </div>
            </div>
            <div className="p-6 bg-[#2a2a2a]/50 border border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">Billing History</h3>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm"><p>December 2024</p><a href="#" className="text-[#4885FF] hover:underline">Download Invoice</a></div>
                    <div className="flex justify-between text-sm"><p>November 2024</p><a href="#" className="text-[#4885FF] hover:underline">Download Invoice</a></div>
                    <div className="flex justify-between text-sm"><p>October 2024</p><a href="#" className="text-[#4885FF] hover:underline">Download Invoice</a></div>
                </div>
            </div>
        </div>
    );
};


const SettingsTab = () => {
    const [activeSettingsTab, setActiveSettingsTab] = useState<'profile' | 'general' | 'payment' | 'billing'>('profile');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1200);
    }, []);


    const renderSettingsContent = () => {
        switch (activeSettingsTab) {
            case 'profile': return <ProfileSettings />;
            case 'general': return <GeneralSettings />;
            case 'payment': return <PaymentSettings />;
            case 'billing': return <BillingSettings />;
            default: return <ProfileSettings />;

        }
    };

    const SettingsSkeleton = () => (
        <div className="animate-pulse">
            <div className="flex gap-4 border-b border-gray-800 mb-6">
                <div className="h-10 bg-gray-700 rounded-t-md w-24"></div>
                <div className="h-10 bg-gray-800/50 rounded-t-md w-24"></div>
                <div className="h-10 bg-gray-800/50 rounded-t-md w-24"></div>
            </div>
            <div className="h-40 bg-gray-800/50 rounded-lg w-full"></div>
            <div className="h-12 bg-gray-800/50 rounded-lg w-32 mt-4 ml-auto"></div>
        </div>
    );

    return (
        <div className="p-6 md:p-10">
            <header className="mb-8">
                <h2 className="text-3xl font-bold">Settings</h2>
                <p className="text-gray-400">Manage your account and website settings.</p>
            </header>

            <div className="bg-[#161616] border border-gray-800 rounded-xl shadow-lg">
                {isLoading ? <div className="p-6"><SettingsSkeleton /></div> : (
                    <>
                        <div className="flex gap-1 sm:gap-4 border-b border-gray-800 px-6 text-sm">
                            <button onClick={() => setActiveSettingsTab('profile')} className={`px-4 py-3 font-semibold transition ${activeSettingsTab === 'profile' ? 'text-white border-b-2 border-[#4885FF]' : 'text-gray-400 hover:text-white'}`}>Profile</button>
                            <button onClick={() => setActiveSettingsTab('general')} className={`px-4 py-3 font-semibold transition ${activeSettingsTab === 'general' ? 'text-white border-b-2 border-[#4885FF]' : 'text-gray-400 hover:text-white'}`}>General</button>
                            <button onClick={() => setActiveSettingsTab('payment')} className={`px-4 py-3 font-semibold transition ${activeSettingsTab === 'payment' ? 'text-white border-b-2 border-[#4885FF]' : 'text-gray-400 hover:text-white'}`}>Payment</button>
                            <button onClick={() => setActiveSettingsTab('billing')} className={`px-4 py-3 font-semibold transition ${activeSettingsTab === 'billing' ? 'text-white border-b-2 border-[#4885FF]' : 'text-gray-400 hover:text-white'}`}>Billing</button>

                            {/* More tabs can be added here */}
                        </div>
                        <div className="p-6">
                            {renderSettingsContent()}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};


// --- (Part 4 of 4): Main Dashboard Component ---

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState<DashboardTab>('overview');

    const navigate = useNavigate();
    const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = () => {
        setIsLoggingOut(true);
        setTimeout(() => {
            navigate('/'); // Redirect to home page
            setIsLoggingOut(false);
        }, 1500); // Simulate API call
    };


    const Sidebar = () => (
        <aside className="w-64 flex-shrink-0 bg-[#101010] p-6 hidden md:flex flex-col justify-between border-r border-gray-800">
            <div>
                <h1 className="text-2xl font-bold text-white mb-12">ClickShift<span className="text-[#4885FF]">.</span></h1>
                <nav className="space-y-3">
                    <button onClick={() => setActiveTab('overview')} className={`w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all hover:pl-5 ${activeTab === 'overview' ? 'bg-[#212121] text-white font-semibold' : 'text-gray-400 hover:text-white hover:bg-[#212121]/50'}`}>
                        <LuLayoutDashboard /> Overview
                    </button>
                    <button onClick={() => setActiveTab('products')} className={`w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all hover:pl-5 ${activeTab === 'products' ? 'bg-[#212121] text-white font-semibold' : 'text-gray-400 hover:text-white hover:bg-[#212121]/50'}`}>
                        <LuPackage /> Products
                    </button>
                    <button onClick={() => setActiveTab('orders')} className={`w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all hover:pl-5 ${activeTab === 'orders' ? 'bg-[#212121] text-white font-semibold' : 'text-gray-400 hover:text-white hover:bg-[#212121]/50'}`}>
                        <LuCreditCard /> Orders
                    </button>
                </nav>
            </div>
            <nav className="space-y-3">
                <button onClick={() => setActiveTab('settings')} className={`w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all hover:pl-5 ${activeTab === 'settings' ? 'bg-[#212121] text-white font-semibold' : 'text-gray-400 hover:text-white hover:bg-[#212121]/50'}`}>
                    <LuSettings /> Settings
                </button>
                <button onClick={() => setIsLogoutConfirmOpen(true)} className="w-full text-left flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#212121]/50 px-4 py-2.5 rounded-lg transition-all">
                    <LuLogOut /> Logout
                </button>
            </nav>
        </aside>
    );

    return (
        <div className="bg-[#0C0C0C] text-white min-h-screen flex">
            <Sidebar />
            <main className="flex-1 overflow-auto">
                {activeTab === 'overview' && <OverviewTab />}
                {activeTab === 'products' && <ProductsTab />}
                {activeTab === 'orders' && <OrdersTab />}
                {activeTab === 'settings' && <SettingsTab />}
            </main>

            {/* 4. RENDER DIALOGS AND OVERLAY */}
            <ConfirmationDialog
                isOpen={isLogoutConfirmOpen}
                onClose={() => setIsLogoutConfirmOpen(false)}
                onConfirm={handleLogout}
                title="Confirm Logout"
                message="Are you sure you want to log out of your account?"
                actionLabel="Logout"
            />

            {isLoggingOut && (
                <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-[99]">
                    <Spinner size={40} />
                    <p className="mt-4 text-lg">Logging out...</p>
                </div>
            )}

        </div>
    );
}