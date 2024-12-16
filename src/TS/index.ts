interface Countdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  
  /**
   * 计算时间差并返回倒计时对象
   * @param startTime 活动开始时间（Date对象）
   * @param serverTime 服务器时间（Date对象）
   * @returns Countdown 返回倒计时的天、小时、分钟、秒数
   */
  function calculateCountdown(serverTime: Date, startTime: Date): Countdown {
    // 计算时间差，单位为毫秒
    const diff = startTime.getTime() - serverTime.getTime();
  
    // 如果时间差小于0，表示活动已经开始
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  
    // 计算倒计时的天数、小时、分钟、秒数
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }
  
  /**
   * 启动倒计时，每秒更新一次
   * @param startTime 活动的开始时间（Date对象）
   * @param serverTime 传入的服务器时间（Date对象）
   */
  function startCountdown(startTime: Date, serverTime: Date) {
    // 转换服务器时间为时间戳（毫秒）
    let currentServerTime = serverTime.getTime();
  
    const interval = setInterval(() => {
      // 每秒更新服务器时间（模拟服务器时间的递增）
      currentServerTime += 1000;  // 增加1秒
  
      // 使用更新后的服务器时间计算倒计时
      const countdown = calculateCountdown(new Date(currentServerTime), startTime);
  
      // 输出倒计时
      console.log(`距离开始还有: ${countdown.days}天 ${countdown.hours}小时 ${countdown.minutes}分钟 ${countdown.seconds}秒`);
  
      // 如果倒计时结束，停止循环
      if (countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0) {
        console.log("活动已开始！");
        clearInterval(interval);  // 停止倒计时
      }
    }, 1000);  // 每秒更新一次
  }
    
  // 示例：启动倒计时
  const startTime = new Date(2024, 11, 25, 0, 0, 0);  // 活动开始时间：2024年12月25日00:00:00
  const serverTime = new Date();  // 假设这是传入的服务器时间
  startCountdown(startTime, serverTime); 
  