/**
 * 반드시 필요한 의존성은 항상 생성자를 통해 주입! => 읽기전용, 의존성 변경 불가
 * 선택적인 의존성은 세터/메소드를 통해 주입 가능
 * 필드 기반 주입은 사용 X => 의존성의 정보를 숨긴다. 필드 주입은 매우 간단해서 너무 많은 의존성을 추가하면 '단일책임원칙(SRP)'를 위반할 수 있다.
 */
package app.messages;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class MessageService {
    private final static Logger logger = LoggerFactory.getLogger(MessageService.class);

    private MessageRepository repository;

    public MessageService(MessageRepository repository) {
        this.repository = repository;
    }

    @SecurityCheck
    @Transactional(noRollbackFor = { UnsupportedOperationException.class })
    public Message save(String text) {
        Message message = repository.saveMessage(new Message(text));
        logger.debug("New message[id={}] saved", message.getId());
        updateStatistics();
        return message;
    }

    private void updateStatistics() {
        throw new UnsupportedOperationException("This method is not implemented yet.");
    }
}
