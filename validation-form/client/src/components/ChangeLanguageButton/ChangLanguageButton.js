import { Avatar, ClickAwayListener, ListItemIcon, ListItemText, MenuItem, MenuList, Popper } from "@mui/material";

import React, { useState, useRef, useEffect } from "react";

import { useTranslation } from 'react-i18next';

import languages from "./languages";

export default function ChangLanguageButton() {

    const { i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const anchorElRef = useRef();

    // Current Language Index
    const GetCurrentIndexLanguage = () => {
        useEffect(() => {
            if (i18n.language !== 'en-US') {
                setSelectedIndex(languages.findIndex((language) => language.id === i18n.language));
                console.log('i18n.language',i18n.language);
            }

        }, [])

    }
    GetCurrentIndexLanguage();
    const handleClick = (event) => {
        setIsOpen(!isOpen);
    };
    function handleClose() {
        setIsOpen(false);
    }
    function handleMenuItemClick(event, index) {
        setSelectedIndex(index);
        handleClose();
        i18n.changeLanguage(languages[index].id);
    }
    const listLanguageStyle = {
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 0 8px #888888',
        padding: '8px'
    };
    const languageItemStyle = {
        '& .MuiListItemText-primary': {
            fontSize: '0.875rem',
        }
    };
    const languageItemAvatarStyle = {
        width: '2rem',
        height: '2rem',
    };
    return (
        <>
            {/* <Button
                type="button" onClick={handleClick}
                variant="outline"
                startIcon={<Avatar alt='en-icon' src={languages[selectedIndex].icon} />}
                endIcon={<KeyboardArrowDownIcon />}
                ref={anchorElRef}
            >
                {languages[selectedIndex].name}
            </Button> */}
            <Avatar variant='square' alt='language-icon' src={languages[selectedIndex] ? languages[selectedIndex].icon : null} onClick={handleClick} ref={anchorElRef} sx={{ width: '24px', height: '24px' }} />
            <Popper open={isOpen} anchorEl={anchorElRef.current} placement='bottom-end' sx={{ '& .MuiList-root': { marginTop: '0.6rem ' } }}>
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu" autoFocusItem
                        sx={listLanguageStyle}>
                        {languages.map((language, index) => (
                            <MenuItem
                                key={language.id}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                                sx={languageItemStyle}
                            >
                                <ListItemIcon sx={{ marginRight: '12px' }}>
                                    <Avatar alt={`${language.id}-flag-icon`} src={language.icon} sx={languageItemAvatarStyle} variant='square' />
                                </ListItemIcon>
                                <ListItemText >{language.name}</ListItemText>

                            </MenuItem>
                        ))}
                    </MenuList>
                </ClickAwayListener>
            </Popper>
        </>
    )
}