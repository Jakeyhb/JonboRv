import React, { useState } from 'react';

enum AssignmentStatus {
    NotSubmitted = "未提交",
    Submitted = "已提交",
    Graded = "已评分",
    Returned = "被退回",
    Withdrawn = "已撤回"
}

export default function MyWork() {
    const [status, setStatus] = useState<AssignmentStatus>(AssignmentStatus.NotSubmitted);
    const [comment, setComment] = useState<string>("");

    const handleSave = () => {
        console.log("作业已保存");
    };

    const handleSubmit = () => {
        setStatus(AssignmentStatus.Submitted);
        console.log("作业已提交");
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', border: '1px solid #ddd', borderRadius: '8px' }}>
            {/* Title */}
            <h2>我的作业</h2>
            
            {/* 自定义评论组件 */}
            <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                {/* 头像和用户名 */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img 
                        src="https://via.placeholder.com/40" 
                        alt="用户头像" 
                        style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }}
                    />
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>用户名</span>
                </div>
                
                {/* 评论输入框 */}
                <textarea 
                    rows={4} 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="请输入您的作业评论"
                    style={{ 
                        width: '100%', 
                        padding: '8px', 
                        borderRadius: '4px', 
                        borderColor: '#ddd', 
                        resize: 'none'  // 禁止调整大小
                    }}
                />
                
                {/* 上传附件、图片和视频的图标 */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
                    <label>
                        <input type="file" style={{ display: 'none' }} />
                        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>📎 附件</button>
                    </label>
                    <label>
                        <input type="file" accept="image/*" style={{ display: 'none' }} />
                        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>🖼️ 图片</button>
                    </label>
                    <label>
                        <input type="file" accept="video/*" style={{ display: 'none' }} />
                        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>📹 视频</button>
                    </label>
                </div>
            </div>

            {/* 状态显示 */}
            <p>当前状态: {status}</p>

            {/* 保存&提交按钮 */}
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <button 
                    onClick={handleSave} 
                    style={{ 
                        padding: '8px 16px', 
                        backgroundColor: '#f0f0f0', 
                        color: '#333', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px', 
                        cursor: 'pointer', 
                        marginRight: '10px' 
                    }}>
                    保存
                </button>
                <button 
                    onClick={handleSubmit} 
                    style={{ 
                        padding: '8px 16px', 
                        backgroundColor: '#1890ff', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer' 
                    }}>
                    提交
                </button>
            </div>
        </div>
    );
}
