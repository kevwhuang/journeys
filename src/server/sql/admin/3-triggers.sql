DROP TRIGGER IF EXISTS archive;

DELIMITER $$

CREATE TRIGGER archive
AFTER
    DELETE ON users FOR EACH ROW BEGIN
INSERT INTO
    history
VALUES
    (
        OLD.id,
        OLD.email,
        OLD.username,
        OLD.registered
    );

END$$

DELIMITER ;