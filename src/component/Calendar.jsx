import React, {useCallback} from "react";

const Calendar = (props) => {
  const {showDetail, showList} = props;
  const handleShowDetail = useCallback(
    () => {
      props.onShowDetail(props.showDetail)
    },
    [showDetail],
  )
  const handleShowList = useCallback(
    () => {
      props.onShowList(props.showList)
    },
    [showList],
  )
  const handleDeleteOnCalendar = useCallback(
    () => {
      props.onDeleteOnCalendar(props.onDeleteOnCalendar)
    },
    [],
  )
  return(
  <div className="Calendar">
    <h2>12월 주간 식단표</h2>
    <ul className="Calendar__outline">
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>일</span>
          <b>13</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__button CalendarMenu__button--add" onClick={handleShowList}>
              <i className="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>월</span>
          <b>14</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__button CalendarMenu__button--add" onClick={handleShowList}>
              <i className="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>화</span>
          <b>15</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__button CalendarMenu__button--add" onClick={handleShowList}>
              <i className="fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>수</span>
          <b>16</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__button CalendarMenu__button--add" onClick={handleShowList}>
              <i className="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>목</span>
          <b>17</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__button CalendarMenu__button--add" onClick={handleShowList}>
              <i className="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>금</span>
          <b>18</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__button CalendarMenu__button--add" onClick={handleShowList}>
              <i className="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
      <li className="Calendar__item">
        <div className="Calendar__day">
          <span>토</span>
          <b>19</b>
        </div>
        <div className="Calendar__menu">
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">토스트</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
              <div className="CalendarMenu__thumb">
                <img
                  src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                  alt=""
                />
              </div>
              <div className="CalendarMenu__title">닭도리탕</div>
              <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                  <i className="fas fa-search"></i>
                  <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete" onClick={handleDeleteOnCalendar}>
                  <i className="far fa-trash-alt"></i>
                  <i className="ir">메뉴 삭제</i>
                </button>
              </div>
            </div>
          </div>
          <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
              <span>저녁</span>
            </div>
            <button className="CalendarMenu__button CalendarMenu__button--add" onClick={handleShowList}>
              <i className="fas fa-plus"></i>
              <i className="ir">메뉴 추가</i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  );
};

export default Calendar;
