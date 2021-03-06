package app.messages;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class SecurityChecker {
    private final static Logger logger = LoggerFactory.getLogger(SecurityChecker.class);

    @Pointcut("@annotation(SecurityCheck)")
    public void checkMethodSecurity() {

    }

    @Around("checkMethodSecurity()")
    public Object checkSecurity(ProceedingJoinPoint joinPoint) throws Throwable {
        logger.debug("Checking method security...");
        // TODO 여기에 보안 검사 로직 구현하기
        Object result = joinPoint.proceed();
        return result;
    }
}
